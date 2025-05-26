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
        // Mock data for dashboard stats
        $data = [
            'total_lights' => 40889,
            'active' => 10293,
            'faulty' => 89000,
            'energy_usage' => 2040,
            'changes' => [
                'total_lights' => 8.5,
                'active' => 1.2,
                'faulty' => -4.3,
                'energy_usage' => 1.8,
            ],
            'is_up' => [
                'total_lights' => true,
                'active' => true,
                'faulty' => false,
                'energy_usage' => true,
            ],
            'periods' => [
                'total_lights' => 'yesterday',
                'active' => 'past week',
                'faulty' => 'yesterday',
                'energy_usage' => 'yesterday',
            ],
        ];

        return response()->json($data);
    }
}
