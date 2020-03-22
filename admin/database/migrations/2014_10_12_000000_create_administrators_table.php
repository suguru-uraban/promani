<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdministratorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('administrators', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('employee_number')->comment('社員番号');
            $table->string('name')->comment('名前');
            $table->string('email')->unique()->comment('メールアドレス');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->comment('パスワード');
            $table->enum('enum_administrator_auth', ['edit', 'view', 'none'])->comment('管理者編集閲覧権限');
            $table->enum('enum_company_auth', ['edit', 'view', 'none'])->comment('制作会社編集閲覧権限');
            $table->enum('enum_creator_auth', ['edit', 'view', 'none'])->comment('クリエイター編集閲覧権限');
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
        Schema::dropIfExists('administrators');
    }
}
