
"use client";

import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  return (
    <div className="checkout-page container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Cart Items */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item._id} className="border p-2 mb-2">
                  <p>{item.title}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Section: User Details & Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                className="w-full border p-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full border p-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Address</label>
              <textarea
                className="w-full border p-2"
                placeholder="Enter your address"
              ></textarea>
            </div>

            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <div>
              <p>Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
              <p>
                Total Price: $
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
