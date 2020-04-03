<?php

use Illuminate\Database\Seeder;

class AdministratorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('administrators')->delete();
        DB::table('administrators')->insert([
            'employee_number' => '0000',
            'name' => 'テストユーザー',
            'email' => 'test@example.com',
            'password' => Hash::make('password1'),
            'administrator_auth' => 2,
            'company_auth' => 2,
            'creator_auth' => 2,
        ]);
    }
}
