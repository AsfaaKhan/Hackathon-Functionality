"use client"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { useEffect, useState } from "react"


interface IProduct {
    title: string,
    price: number,
    tags: string[],
    discountPercentage: number,
    description: string,
    isNew: boolean,
    imageUrl: string,
    _id: number
}
export default function ProductList() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products, setProducts] = useState<IProduct[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {
            const response = await client.fetch(`*[_type == "product"]{
            title,
            price,
            tags,
            discountPercentage,
            description,
            isNew,
            imageUrl,
            _id
          }`);
            setProducts(response);
            setFilteredProducts(response); // Initially show all products
        };

        fetchData();
    }, []);


    const filterProduct = (tag: string) => {
        // Filter the products based on the selected tag
        const updatedList = products.filter((product) => product.tags.includes(tag));
        setFilteredProducts(updatedList);
    };

    return (
        <div>
            {/*  Image Cards */}
            <div className=" container flex flex-col  mt-20 mb-20 ">
                <div className=" justify-center items-center buttons grid grid-cols-3 sm:grid-cols-5 gap-2  ">
                    {/* Filter buttons */}
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => setFilteredProducts(products)}>All</button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("vintage ")}>vintage</button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("furniture ")}>Furniture</button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("rustic")}>Rustic</button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("home decor")}>Home Decor</button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("interior design ")}>Interior Design</button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("modern ")}>Modern </button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("nature inspired")}>Nature Inspired</button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("luxury ")}>luxury </button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("elegant")}>Elegant</button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("bed ")}>Bed </button>
                    <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("classic ")}>Classic</button>
                </div>




                {/* 1st Row */}
                <div className="container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4   gap-12 sm:gap-10 md:gap-8 lg:gap-6 mt-10 ">
                    {filteredProducts.map((products) => (
                        <div key={products._id} className="flex flex-col h-[615px] items-center text-center ">
                            {/* Image */}
                            <div className=" flex justify-center w-full  md:w-[400px] h-[400px] rounded-sm">
                                <Image src={urlFor(products.imageUrl).url()}
                                    alt={products.title}
                                    width={239}
                                    height={427}>
                                </Image>
                            </div>
                            {/* Text */}
                            <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                                <div >
                                    <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >{products.title}</h5>

                                </div>
                                <div>
                                    <h5 className="font-bold text-sm text-gray line-clamp-1 " style={{ letterSpacing: "0.2px" }} >{products.description}</h5>
                                </div>

                                <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                    <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >${products.price}</h5>
                                </div>

                                <div>
                                    <Image src={"/images/product-colors.svg"}
                                        alt="product "
                                        width={82}
                                        height={16}>
                                    </Image>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}