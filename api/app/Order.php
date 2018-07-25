<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    protected $table = "orders";
    
    protected $fillable = ["date", "total"];

    protected $hidden = ["updated_at", "pivot"];

    protected $casts = [
        'total' => 'float'
    ];

    public function products()
    {
        return $this->belongsToMany('App\Product', 'order_product');
    }
}
