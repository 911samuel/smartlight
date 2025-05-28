<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Schedule;
use App\Models\Light;
use Carbon\Carbon;
use App\Events\LightStatusUpdated;

class UpdateLightStatusBySchedule extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'lights:update-status-by-schedule';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update light statuses based on the saved schedule';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $schedule = Schedule::first();

        if (!$schedule) {
            $this->info('No schedule found.');
            return 0;
        }

        $now = Carbon::now()->format('H:i');

        if ($now === $schedule->on_time) {
            $this->switchAllLights('on');
            $this->info('Switched all lights ON as per schedule.');
        } elseif ($now === $schedule->off_time) {
            $this->switchAllLights('off');
            $this->info('Switched all lights OFF as per schedule.');
        } else {
            $this->info('No action needed at this time.');
        }

        return 0;
    }

    protected function switchAllLights(string $status)
    {
        $lights = Light::all();

        foreach ($lights as $light) {
            $light->status = $status;
            $light->save();

            event(new LightStatusUpdated($light));
        }
    }
}
