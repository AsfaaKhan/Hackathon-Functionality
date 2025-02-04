"use client";

import { urlFor } from "@/sanity/lib/image";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const handleProceed = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      iconColor: 'green',
      customClass: {
        popup: 'colored',
      },
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,

    });
    (async () => {
      await Toast.fire({
        icon: 'success',
        title: 'Proccessing',
      })
    })()
  }

  return (
    <div className="container">
      <div className="container  h-1/2 p-4">
        <h1 className=" container text-2xl font-bold text-darkBlue  mb-4 mt-20">Your Cart</h1>
        <div className="container  mx-auto  p-5 ">
          {cartItems.length === 0 ? (
            <div className="h-1/2">
              <p className="container font-semibold text-red-600 flex justify-center items-center text-2xl mt-10 ">Your Cart is empty.</p>
              <p className="container flex justify-center items-center text-xl font-bold text-gray">Shop Now..</p>
            </div>

          ) : (
            <div className="flex flex-col gap-10 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {cartItems.map((item) => (
                  <div key={item._id} className=" grid gap-5">
                    <div className="border items-center   p-4 rounded flex justify-center  gap-10">
                      <div >
                        <Image src={urlFor(item.imageUrl).url()}
                          alt={item.title}
                          width={100}
                          height={100}
                        >
                        </Image>
                      </div>
                      <div className=" flex flex-col gap-3">
                        <h2 className="text-lg font-bold">{item.title}</h2>
                        <p className="font-bold ">Price: ${item.price}</p>
                        <p className="font-bold">Quantity: {item.quantity}</p>
                        <div>
                          <div className="flex ">
                            <button onClick={() => increaseQuantity(item._id)} className="border-black border-[1px] w-6 h-5 flex items-center justify-center bg-blue-950 text-white  hover:bg-darkBlue  hover:text-dullWhite"> + </button>
                            <p className="border-[1px] border-black w-5 h-5 flex justify-center  items-center italic ">
                              {item.quantity}
                            </p>
                            <button onClick={() => decreaseQuantity(item._id)} className="border-black border-[1px] w-6 h-5 flex items-center justify-center  bg-red-600  hover:bg-red-700  text-dullWhite font-bold "> - </button>
                          </div>
                          <p className="font-bold text-xl  flex justify-end ">Total: ${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-fit"
                    >
                      Remove
                    </button>
                  </div>
                ))}

              </div>

              <div className=" mt-3 flex justify-end items-end">
                <Link href="/checkout">
                  <button
                    onClick={(handleProceed)}
                    className="mt-4 ] text-white py-2 px-4  bg-[#2DC071] shadow-md rounded-md hover:bg-[#219055]">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>

  );
}
