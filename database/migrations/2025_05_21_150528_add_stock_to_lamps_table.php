<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStockToLampsTable extends Migration
{
    public function up()
    {
        Schema::table('lamps', function (Blueprint $table) {
            $table->unsignedInteger('stock')->default(0); // เพิ่มคอลัมน์ stock ค่าเริ่มต้น 0
        });
    }

    public function down()
    {
        Schema::table('lamps', function (Blueprint $table) {
            $table->dropColumn('stock');
        });
    }
}
