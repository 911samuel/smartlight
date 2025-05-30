<?php

namespace App\Http\Controllers;

use App\Models\Light;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Events\LightStatusUpdated;

class LightController extends Controller
{
    /**
     * Display a listing of the lights.
     */
    public function index()
    {
        $lights = Light::all();
        return response()->json($lights);
    }

    /**
     * Store a newly created light in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'unique_id' => 'required|string|unique:lights,unique_id',
            'street_number' => 'required|string',
            'status' => 'nullable|string|in:on,off',
        ]);

        $light = Light::create([
            'unique_id' => $request->unique_id,
            'street_number' => $request->street_number,
            'status' => $request->status ?? 'off',
        ]);

        return response()->json($light, 201);
    }

    /**
     * Switch on the light.
     */
    public function switchOn($id)
    {
        try {
            $light = Light::findOrFail($id);
            $light->status = 'on';
            $light->save();

            // Temporarily comment out event to isolate error
            event(new LightStatusUpdated($light));

            return response()->json($light);
        } catch (\Exception $e) {
            Log::error('Error switching on light ID ' . $id . ': ' . $e->getMessage());
            return response()->json(['error' => 'Failed to switch on light'], 500);
        }
    }

    /**
     * Switch all lights on or off.
     */
    public function switchAll(Request $request)
    {
        $request->validate([
            'turnOn' => 'required|boolean',
        ]);

        $status = $request->turnOn ? 'on' : 'off';

        $lights = Light::all();
        foreach ($lights as $light) {
            try {
                $light->status = $status;
                $light->save();

                // Temporarily comment out event to isolate error
                // event(new LightStatusUpdated($light));
            } catch (\Exception $e) {
                Log::error('Error switching light ID ' . $light->id . ': ' . $e->getMessage());
            }
        }

        return response()->json(['message' => 'All lights switched ' . $status]);
    }

    /**
     * Switch off the light.
     */
    public function switchOff($id)
    {
        try {
            $light = Light::findOrFail($id);
            $light->status = 'off';
            $light->save();

            // Temporarily comment out event to isolate error
            // event(new LightStatusUpdated($light));

            return response()->json($light);
        } catch (\Exception $e) {
            Log::error('Error switching off light ID ' . $id . ': ' . $e->getMessage());
            return response()->json(['error' => 'Failed to switch off light'], 500);
        }
    }

    /**
     * Save schedule for lights.
     */
    public function schedule(Request $request)
    {
        try {
            $request->validate([
                'onTime' => 'required|string',
                'offTime' => 'required|string',
            ]);

            $schedule = Schedule::first();
            if (!$schedule) {
                $schedule = new Schedule();
            }
            $schedule->on_time = $request->onTime;
            $schedule->off_time = $request->offTime;
            $schedule->save();

            return response()->json(['message' => 'Schedule saved', 'schedule' => $schedule]);
        } catch (\Exception $e) {
            Log::error('Error saving schedule: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to save schedule'], 500);
        }
    }

    /**
     * Get the current schedule.
     */
    public function getSchedule()
    {
        $schedule = Schedule::first();
        return response()->json($schedule);
    }

    /**
     * Get recent lights ordered by creation date descending.
     */
    public function recentLights()
    {
        $recentLights = Light::orderBy('created_at', 'desc')->limit(5)->get();
        return response()->json($recentLights);
    }
}
