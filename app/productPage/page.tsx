"use client"
import 'react-loading-skeleton/dist/skeleton.css'
import ProductCard from "@/components/ProductCart";


const Products = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8 mt-24 ">Shop </h1>
      <ProductCard />
    </div>
  )
}

export default Products
