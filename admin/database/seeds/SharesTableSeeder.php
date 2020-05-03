<?php

use Illuminate\Database\Seeder;
use App\Share;

class SharesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shares')->delete();
        factory(Share::class, 5)
            ->create();
    }
}
