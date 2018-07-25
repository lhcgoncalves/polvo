<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $table = "products";
    
    protected $fillable = ["sku", "name", "description", "price"];

    protected $hidden = ["created_at", "updated_at", "pivot"];

    protected $casts = [
        'price' => 'float'
    ];

    public function orders()
    {
        return $this->belongsToMany('App\Order', 'order_product');
    }
}
