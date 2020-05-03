<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Share;
use Faker\Generator as Faker;

$factory->define(Share::class, function (Faker $faker) {
    return [
        'administrator_id' => 1,
        'information' => "本文です。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。",
    ];
});
