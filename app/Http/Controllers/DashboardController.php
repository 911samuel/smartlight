<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Return dashboard stats data as JSON.
     */
    public function index()
    {
        $totalLights = \App\Models\Light::count();
        $activeLights = \App\Models\Light::where('status', 'on')->count();

        $data = [
            'total_lights' => $totalLights,
            'active' => $activeLights,
            'faulty' => 0, // No fault data available
            'energy_usage' => 0, // No energy usage data available
            'changes' => [
                'total_lights' => 0,
                'active' => 0,
                'faulty' => 0,
                'energy_usage' => 0,
            ],
            'is_up' => [
                'total_lights' => true,
                'active' => true,
                'faulty' => true,
                'energy_usage' => true,
            ],
            'periods' => [
                'total_lights' => '',
                'active' => '',
                'faulty' => '',
                'energy_usage' => '',
            ],
        ];

        return response()->json($data);
    }
}
