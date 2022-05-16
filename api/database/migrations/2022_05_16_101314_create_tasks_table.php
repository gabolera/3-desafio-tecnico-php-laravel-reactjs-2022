<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Título da task');
            $table->string('description')->nullable()->comment('Descrição da task');
            $table->date('expires_date')->nullable()->comments('Data de expiração');
            $table->date('conclusion_date')->nullable()->comments('Data de Conclusão');
            $table->bigInteger('client_id')->unsigned()->comments('FK Cliente (Tabela Users)');
            $table->foreign('client_id')->references('id')->on('users');
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
        Schema::dropIfExists('tasks');
    }
}
