<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LampSeeder extends Seeder
{
    public function run()
    {
        DB::table('lamps')->insert([
            [
                'name' => 'RANARP รอนนาร์ป',
                'price' => 1490,
                'description' => 'โคมไฟโต๊ะทำงาน  สีดำ',
                'image' => 'https://www.ikea.com/th/th/images/products/ranarp-work-lamp-black__0879107_pe614887_s5.jpg?f=s',
                'stock' => 5,
            ],
            [
                'name' => 'NYMÅNE นีโม้เนอ',
                'price' => 2490,
                'description' => 'โคมไฟโต๊ะทำงาน พร้อมที่ชาร์จไร้สาย สีขาว',
                'image' => 'https://www.ikea.com/th/th/images/products/nymane-work-lamp-with-wireless-charging-white__0993555_pe820584_s5.jpg?f=s',
                'stock' => 9,
            ],
            [
                'name' => 'LÅGTRYCK ลัคทรืค',
                'price' => 1990,
                'description' => 'โคมไฟตั้งพื้น สีขาว ยาว 138 ซม.',
                'image' => 'https://www.ikea.com/th/th/images/products/lagtryck-floor-lamp-white__1023683_pe833218_s5.jpg?f=s',
                'stock' => 7,
            ],
               [
                'name' => 'STORSEGEL สตูชิเกล',
                'price' => 399,
                'description' => 'โคมไฟตั้งโต๊ะ, ไม้แอช/ขาว',
                'image' => 'https://www.ikea.com/th/th/images/products/storsegel-table-lamp-ash-white__1285771_pe933398_s5.jpg?f=s',
                'stock' => 15,
            ],
            [
                'name' => 'BÖJA เบยย่า',
                'price' => 1290,
                'description' => 'โคมไฟตั้งโต๊ะ, ไม้ไผ่/ผลิตด้วยมือ',
                'image' => 'https://www.ikea.com/th/th/images/products/boeja-table-lamp-bamboo-handmade__1158340_pe888104_s5.jpg?f=s',
                'stock' => 9,
            ],
            [
                'name' => 'FADO ฟอดู',
                'price' => 590,
                'description' => 'โคมไฟตั้งโต๊ะ, ขาว, 25 ซม.',
                'image' => 'https://www.ikea.com/th/th/images/products/fado-table-lamp-white__1158342_pe888106_s5.jpg?f=s',
                'stock' => 6,
             ],
      ]);
    }
}
