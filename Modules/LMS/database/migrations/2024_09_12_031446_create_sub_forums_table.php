<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create(
            'sub_forums',
            function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('forum_id');
                $table->string('icon')->nullable();
                $table->string('name');
                $table->string('slug');
                $table->text('description');
                $table->foreign('forum_id')->references('id')->on('forums')->onDelete('cascade');
                $table->timestamps();
            }
        );
    }

    public function down(): void
    {
        Schema::dropIfExists('sub_forums');
    }
};
