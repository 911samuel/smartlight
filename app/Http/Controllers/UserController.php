<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    // Return list of users
    public function index()
    {
        $users = User::select('id', 'name', 'email', 'created_at', 'permission')->get();

        // Map to expected frontend fields
        $users = $users->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'joined' => $user->created_at->format('F j, Y'),
                'permission' => $user->permission ?? 'Viewer',
            ];
        });

        return response()->json($users);
    }

    // Store a new user
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required','email','max:255', Rule::unique('users')],
            'permission' => 'required|string|in:Admin,Technician,Viewer',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'permission' => $validated['permission'],
            'password' => Hash::make($validated['password']),
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'joined' => $user->created_at->format('F j, Y'),
                'permission' => $user->permission,
            ],
        ], 201);
    }
}
