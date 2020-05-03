<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Share extends Model
{
    protected $fillable = [
        'id', 'administrator_id', 'information', 'created_at',
    ];

    protected $hidden = [
        'deleted_at', 'updated_at',
    ];
}
