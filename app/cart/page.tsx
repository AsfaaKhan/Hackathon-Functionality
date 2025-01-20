"use client";

import Header from "@/components/header";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <Header />
      <div className="container p-4">
        <h1 className=" container text-2xl font-bold mb-4">Your Cart</h1>
        <div className="container">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="grid gap-4">
              {cartItems.map((item) => (
                <div key={item._id} >
                  <div className="border p-4 rounded flex justify-between">
                    <div>
                      <h2 className="text-lg font-bold">{item.title}</h2>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <p>Total: ${item.price * item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>


              ))}
            </div>
          )}
        </div>

      </div>
    </div>

  );
}
