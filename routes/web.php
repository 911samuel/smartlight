<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\LightController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ContactController;

Route::get('/faq', function () {
    return Inertia::render('user/Faq');
})->name('faq');

Route::get('/contact', function () {
    return Inertia::render('user/ContactUs');
})->name('contactus');

Route::get('/how-it-works', function () {
    return Inertia::render('user/HowItWorks');
})->name('howitworks');

Route::get('/', function () {
    return Inertia::render('user/EntryPage');
})->name('home');

Route::get('/signin', function () {
    return Inertia::render('user/SignIn');
})->name('signin');

Route::get('/signup', function () {
    return Inertia::render('user/SignUp');
})->name('signup');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard');
    })->name('dashboard');

    Route::get('/users', function () {
        return Inertia::render('admin/UsersManagement');
    })->name('users');

    Route::get('/lights', [LightController::class, 'index'])->name('lights.index');
    Route::post('/lights', [LightController::class, 'store'])->name('lights.store');
    Route::post('/lights/{id}/switch-on', [LightController::class, 'switchOn'])->name('lights.switchOn');
    Route::post('/lights/{id}/switch-off', [LightController::class, 'switchOff'])->name('lights.switchOff');

    Route::post('/lights/switch-all', [LightController::class, 'switchAll'])->name('lights.switchAll');
    Route::post('/lights/schedule', [LightController::class, 'schedule'])->name('lights.schedule');
    Route::get('/lights/schedule', [LightController::class, 'getSchedule'])->name('lights.getSchedule');
    Route::get('/lights/recent', [LightController::class, 'recentLights'])->name('lights.recent');

    Route::get('/lights-management', function () {
        return Inertia::render('admin/LightsManagement');
    })->name('lights.management');
    Route::get('/messages', function () {
        return Inertia::render('user/Messages');
    })->name('messages');
});

Route::get('/contact', function () {
    return Inertia::render('user/ContactUs');
})->name('contact');

Route::post('/api/contact', [ContactController::class, 'submit'])->name('api.contact.submit');

Route::get('/api/users', [UserController::class, 'index'])->name('api.users.index');
Route::post('/api/users', [UserController::class, 'store'])->name('api.users.store');
Route::put('/api/users/{user}', [UserController::class, 'update'])->name('api.users.update');
Route::delete('/api/users/{user}', [UserController::class, 'destroy'])->name('api.users.destroy');

Route::get('/api/contact/messages', [ContactController::class, 'index'])->name('api.contact.index');

Route::get('/api/dashboard', [DashboardController::class, 'index'])->name('api.dashboard.index');


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
