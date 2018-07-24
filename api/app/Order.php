<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    protected $table = "orders";
    
    protected $fillable = ["date", "total"];

    public function orders() {
        return $this->belongsToMany('App\Product', 'order_product');
    }
}
