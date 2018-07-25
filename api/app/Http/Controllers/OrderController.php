<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Order;

class OrderController extends Controller
{
    public function index()
    {
        return Order::with('products')->get();
    }

    public function store(Request $request)
    {
        $order = Order::create([
            'date' => $request->date,
            'total' => $request->total
        ]);

        foreach ($request->products as $product) {
            $order->products()->attach($product);
        }

        return $order;
    }

    public function show($id)
    {
        $order = Order::where('id', $id)->with('products')->get();

        if (!$order) {
            return response()->json(['message' => 'Order not found']);
        }

        return $order;
    }

    public function destroy($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Order not found']);
        }

        $order->delete();

        return response()->json(['message' => 'Order was removed']);
    }
}
