"use client";

import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/quries";
// import { useCart } from "@/app/context/CartContext";
import { Product } from "@/types/product";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";




const SHOES = () =>{
  const [product, setProduct ] = useState<Product[]>([])
   const { addToCart } = useCart(); // Get the Add to Cart function from the context
  
    const handleAddToCart = (product: Product) => {
      addToCart(product);
      alert(`${product.title} added to cart!`);
    };

  useEffect(()=>{
    async function fetchProduct(){
      const fetchedProduct : Product[] = await client.fetch(allProducts)
      setProduct(fetchedProduct)
    }
    fetchProduct()
  },[])



return(
  <div>
    <div className="container flex flex-col mt-20 mb-20">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[48px]">
         {product.map((product) => (
          <div key={product._id}
            className="flex flex-col justify-center border-[1px] rounded-md shadow-md h-[500px] w-full gap-20"
          >
            {/* Product Image */}
            <div className=" flex justify-center items-center w-full h-[200px] rounded-sm">
              <Link href={`/product/${product.slug.current}`}>
                <Image
                  src={urlFor(product.imageUrl).url()}
                  alt={product.title}
                  width={200}
                  height={200}
                />
              </Link>
            </div>

            {/* Product Details */}
            <div className="flex flex-col text-center items-center justify-center">
              <h5 className="text-darkBlue font-bold text-base">
                {product.title}
              </h5>
              <p className="font-medium text-sm text-gray line-clamp-1">
                {product.description}
              </p>
              <h5 className="text-green font-bold text-base">${product.price}</h5>


              {/* Add to Cart Button */}
              <button
                onClick={() =>handleAddToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
              {/* View Details */}
              <Link href={`/product/${product.slug.current}`}>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View
              </button>
              </Link>

            </div>
          </div>
        ))}
      </div>
      </div>
  </div>

)

}
export default SHOES