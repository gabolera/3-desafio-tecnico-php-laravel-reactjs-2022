<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Task extends Model
{
    use HasFactory;

    protected $dates = [
        'created_at',
        'updated_at',
        'expires_date',
        'conclusion_date'
    ];


    public function client()
    {
        return $this->belongsTo(User::class);
    }
}
