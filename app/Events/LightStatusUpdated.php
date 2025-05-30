<?php

namespace App\Events;

use App\Models\Light;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LightStatusUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $light;

    /**
     * Create a new event instance.
     *
     * @param \App\Models\Light $light
     * @return void
     */
    public function __construct(Light $light)
    {
        $this->light = $light;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('lights');
    }

    public function broadcastWith()
    {
        return ['light' => $this->light];
    }
}
