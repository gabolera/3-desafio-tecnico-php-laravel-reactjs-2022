<?php

namespace App\Http\Controllers;

use App\Models\Task;
use DateTime;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $task = new Task();
        $task->title = $request->title;
        $task->description = $request->description;
        $task->client_id = $request->client_id;
        $task->expires_date = $request->expires_date;
        $task->conclusion_date = $request->conclusion_date;
        $task->save();
        $task->finished = !empty($request->conclusion_date) ? true : false;
        $task->overdue = ($task->expires_date > new DateTime()) ? true : false;
        return $task;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $task = Task::find($id)->get()->first();
        $task->title = isset($request->title) ? $request->title : $task->title;
        $task->description = isset($request->description) ? $request->description : $task->description;
        $task->expires_date = isset($request->expires_date) ? $request->expires_date : $task->expires_date;
        $task->conclusion_date = ($request->conclusion_date == false) ? null : $request->conclusion_date;
        $task->save();
        $task->finished = !empty($request->conclusion_date) ? true : false;
        $task->overdue = ($task->expires_date > new DateTime()) ? true : false;
        return $task;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Task::find($id)->get()->first();
        $task->delete();
        return $task;
    }
}
