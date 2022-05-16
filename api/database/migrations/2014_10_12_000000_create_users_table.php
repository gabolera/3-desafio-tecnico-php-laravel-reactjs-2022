<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Nome');
            $table->string('email')->unique()->comment('Email');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->comment('Senha');
            $table->string('group', 10)->default('CLIENT')->comment('Grupo para permissão simples');
            $table->string('telephone', 20)->nullable()->comment('Telefone');
            $table->string('gender', 2)->nullable()->comment('M - Masculino | F - Feminino');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
