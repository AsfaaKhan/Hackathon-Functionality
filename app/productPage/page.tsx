import HeadLine2 from "@/components/headline2"
import Header from "@/components/header"
import Image from "next/image"
import { Slash } from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"



// Inerface
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

export default async function ProductList() {
        // Query for fetching data
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
        
            const products: IProduct[] = response
            console.log(products);

    return (
        <div>

            {/* Headline */}
            <div>
                <HeadLine2 />
            </div>

            {/* Header */}
            <Header />

            {/*  */}
            <div>

                {/* Heading */}
                <div className="pt-[24px] pb-[24px] bg-[#FAFAFA]">
                    <div className="container flex flex-col md:flex-row md:justify-between gap-[30px]">
                        <div><h3 className="font-bold text-2xl " style={{ letterSpacing: "0.1px" }}>Shop</h3></div>
                        <div >
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator>
                                        <Slash />
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/productPage" className="text-black">Shop</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                </div>
            </div>
            

            {/* Product List*/}
             <div>
                        {/*  Image Cards */}
                        <div className="container flex flex-col  mt-20 mb-20 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-[48px] ">
                                {/* Filter buttons */}
                                {/* <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => setFilteredProducts(products)}>All</button>
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
                            <button className="border-[1px] border-darkBlue rounded-full hover:bg-darkBlue  hover:text-dullWhite shadow-md" onClick={() => filterProduct("classic ")}>Classic</button> */}
                            </div>
            
                            {/* 1st Row */}
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-[48px] ">
                                {products.map((products) => (
                                    <div key={products._id} className="flex flex-col items-center text-center border-[1px] rounded-md  shadow-md ">
                                        {/* Image */}
                                        <div className=" flex justify-center w-full h-[400px] rounded-sm">
                                            <Image src={urlFor(products.imageUrl).url()}
                                                alt={products.title}
                                                width={300}
                                                height={300}>
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
        </div>
    )
}