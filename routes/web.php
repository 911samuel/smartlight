<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('EntryPage');
})->name('home');

Route::get('/signin', function () {
    return Inertia::render('SignIn');
})->name('signin');

Route::get('/signup', function () {
    return Inertia::render('SignUp');
})->name('signup');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/users', function () {
        return Inertia::render('UsersManagement');
    })->name('users');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
