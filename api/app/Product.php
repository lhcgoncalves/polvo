<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $table = "products";
    
    protected $fillable = ["sku", "name", "description", "price"];

    public function orders() {
        return $this->belongsToMany('App\Order', 'order_product');
    }
}
