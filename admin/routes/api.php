<?php

use Illuminate\Http\Request;

// 会員登録
Route::post('/register', 'Auth\RegisterController@register')->name('register');

// ログイン
Route::post('/login', 'Auth\LoginController@login')->name('login');

// ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// ログイン管理者取得
Route::get('/administrator', fn() => Auth::user())->name('administrator');

// 共有情報
Route::apiResource('/share', 'ShareController');
