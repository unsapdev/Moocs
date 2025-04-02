<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('course_prices', function (Blueprint $table) {

            $table->string('currency')->default('USD-$')->after('price');
            //
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('course_prices', function (Blueprint $table) {
            //
            $table->dropColumn('currency');
        });
    }
};
