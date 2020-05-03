<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Share;

class SharesController extends Controller
{
    public function index()
    {
        $shares = Share::all();
        return $shares;
    }
}
