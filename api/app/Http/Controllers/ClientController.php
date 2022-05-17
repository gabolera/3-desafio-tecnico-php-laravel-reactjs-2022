<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = User::where('group', '=', 'CLIENT')->with('tasks')->get();
        return $results;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $client = new User();
        $client->email = $request->email;
        $client->name = $request->name;
        $client->password = Hash::make($request->password);
        $client->telephone = $request->telephone;
        $client->gender = $request->gender;
        $client->group = isset($request->group) ? $request->group : 'CLIENT';
        $client->save();

        return $client;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $results = User::where('group', '=', 'CLIENT')->where('id', '=', $id)->with('tasks')->get()->first();
        return $results;
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
        $client = User::where('group', '=', 'CLIENT')->where('id', '=', $id)->with('tasks')->get()->first();
        $client->name = $request->name;
        $client->telephone = $request->telephone;
        $client->gender = $request->gender;
        $client->save();
        return $client;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
