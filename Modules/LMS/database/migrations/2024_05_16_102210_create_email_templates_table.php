<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create(
            'email_templates',
            function (Blueprint $table) {
                $table->id();
                $table->string('subject');
                $table->string('template_name');
                $table->text('description');
                $table->timestamps();
            }
        );
    }

    public function down(): void
    {
        Schema::dropIfExists('email_templates');
    }
};
