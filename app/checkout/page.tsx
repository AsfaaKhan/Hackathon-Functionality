
"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  return (
    <div className="container  mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-28 text-darkBlue container ">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Cart Items */}
        <div>
          <h2 className=" container text-xl  mb-2 text-yellow-500 font-bold underline">Your Cart</h2>
          {cartItems.length === 0 ? (
            <div className=" mt-10 flex flex-col justify-center items-center gap-5 ">
              <p className="text-2xl "> Shipping Complete </p>
              <div className=" flex justify-center items-center h-16 bg-[#2DC071] shadow-md rounded-md hover:bg-[#219055]">
                <Link href={"/productPage"} >
                  <Button variant={"shopButton"}>Shop Again </Button>
                </Link>
              </div>
            </div>

          ) : (
            <ul className="container">
              {cartItems.map((item) => (
                <div key={item._id} className=" border shadow-md  p-5 mb-2">
                  <div className="flex  items-center  gap-2">
                    <p className="font-semibold text-xl "> Item :</p>
                    <span className=" font-semibold text-green "> {item.title}</span>
                  </div>

                  <div className="flex  items-center  gap-2">
                    <p className="font-semibold text-xl "> Quantity :</p>
                    <span className=" font-semibold text-green "> {item.quantity}</span>
                  </div>
                  <div className="flex  items-center  gap-2">
                    <p className="font-semibold text-xl "> Price:</p>
                    <span className=" font-semibold text-green"> ${item.price}</span>
                  </div>
                </div>
              ))}
            </ul>
          )}
        </div>

        {/* Right Section: User Details & Summary */}
        <div className="container">
          <h2 className="text-xl underline mb-2 font-bold text-yellow-500">Billing Details</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                className="w-full border shadow-sm p-2 focus:ring-2 focus:outline-none rounded"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                className="w-full border shadow-sm p-2 focus:ring-2 focus:outline-none rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Address</label>
              <textarea
                className="w-full border shadow-sm p-2 focus:ring-2 focus:outline-none rounded"
                placeholder="Enter your address"
              ></textarea>
            </div>

            <h2 className="text-xl font-semibold mb-2 text-yellow-500 underline">Order Summary</h2>
            <div>
              <p className="font-semibold text-xl ">Total Items: <span className="text-green ">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span></p>
              <p className="font-semibold text-xl ">
                Total Price:
                <span className="text-green "> ${cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}</span>

              </p>
            </div>


            {/* <div className=" flex w-4 justify-center items-center h-16 bg-[#2DC071] shadow-md rounded-md hover:bg-[#219055]">
              <Link href={"/productPage"} >
                <Button variant={"shopButton"}>Place Order </Button>
              </Link>
            </div> */}
            <button
              type="submit"
              className="mt-4 ] text-white py-2 px-4  bg-[#2DC071] shadow-md rounded-md hover:bg-[#219055]"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
