<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;

class ScheduleController extends Controller
{
    public function store(Request $request,$id)
    {
        $date = $request->date;

        return view('calendar.add',['date' => $date]);
    }
}
