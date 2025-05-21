<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UpdateStockInLampsSeeder extends Seeder
{
    public function run()
    {
        $stocks = [15, 9, 6];
        
        foreach ($stocks as $index => $stock) {
            DB::table('lamps')->where('id', $index + 1)->update(['stock' => $stock]);
        }
    }
}
