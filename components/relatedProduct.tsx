"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "@/app/context/CartContext";
import { Product } from "@/types/product";
import { client } from "@/sanity/lib/client";
import { relatedProducts } from "@/sanity/lib/quries";
import { useState, useEffect } from "react";
import { useWishlist } from "@/app/context/wishlistContext";
// import { PiShoppingCart } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";


const RelatedProducts = () => {
    const [product, setProduct] = useState<Product[]>([])
    const { addToCart } = useCart(); // Get the Add to Cart function from the context
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();


    const handleAddToCart = (product: Product) => {
        addToCart(product);
        alert(`${product.title} added to cart!`);
    };

    const handleWishlistToggle = (product: Product) => {
        if (wishlist.some((item) => item.id === product._id)) {
            removeFromWishlist(product._id);
            alert(`${product.title} removed from wishlist!`);
        } else {
            addToWishlist({
                id: product._id,
                title: product.title,
                price: product.price,
                imageUrl: product.imageUrl,
            });
            alert(`${product.title} added to wishlist!`);
        }
    };

    useEffect(() => {
        async function fetchProduct() {
            const fetchedProduct: Product[] = await client.fetch(relatedProducts)
            setProduct(fetchedProduct)
        }
        fetchProduct()
    }, [])


    return (
        <div>
            <div className="container flex flex-col mt-20 mb-20 ">
                <div className="flex flex-col justify-center items-center text-center gap-[10px ] my-10">
                    <h3 className="font-bold text-2xl text-darkBlue" style={{ letterSpacing: "0.1px" }}>
                        RELATED PRODUCTS
                    </h3>
                </div>
                <div className=" mt-5 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[48px]">
                    {product.map((product) => {
                        // For wishlist
                        const isInWishlist = wishlist.some((item) => item.id === product._id);
                        return (
                            <div key={product._id}
                                className="flex flex-col justify-center border-[1px] rounded-md shadow-md h-[600px] w-full gap-20 hover:scale-105 transition-transform ease-out duration-700"
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
                                    <div className="flex justify-between gap-5 ">
                                        {/* Add to Cart Button */}
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="mt-2 font-bold   text-white px-4 py-2 rounded  bg-yellow-500 hover:bg-yellow-400"
                                        >
                                            <CiHeart size={24} />
                                        </button>

                                        {/* Wishlist Button */}
                                        <button
                                            onClick={() => handleWishlistToggle(product)}
                                            className={`mt-2 px-4 py-2 rounded ${isInWishlist
                                                ? "bg-red-500 text-black hover:bg-red-600"
                                                : "bg-yellow-500 hover:bg-yellow-400 text-white hover:bg-gray-600"
                                                }`}
                                        >
                                            {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                                        </button>
                                    </div>

                                    {/* View Details */}
                                    <Link href={`/product/${product.slug.current}`}>
                                        <button
                                            className="mt-2 bg-darkBlue text-white px-4 py-2 rounded hover:bg-blue-900"
                                        >
                                            View More...
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        )

                    }
                    )}
                </div>
            </div>
        </div>

    )

}
export default RelatedProducts