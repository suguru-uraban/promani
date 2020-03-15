<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        DB::table('users')->insert([
            'employee_number' => '0000',
            'name' => 'テストユーザー',
            'email' => 'test@example.com',
            'password' => Hash::make('password1'),
            'enum_administrator_auth' => 'edit',
            'enum_company_auth' => 'edit',
            'enum_creator_auth' => 'edit',
        ]);
    }
}
