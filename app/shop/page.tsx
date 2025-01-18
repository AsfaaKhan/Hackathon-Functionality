
// import Header from "@/components/header"
// import Image from "next/image"
// import { client } from "@/sanity/lib/client"
// import { urlFor } from "@/sanity/lib/image"


// interface IProduct {
//     title: string,
//     price: number,
//     tags: [],
//     discountPercentage: number,
//     description: string,
//     isNew: boolean,
//     imageUrl: string,
//     _id: number

// }


// export default async function Shop() {
//     const response = await client.fetch(`*[_type == "product"]{
//         title,
//         price ,
//         tags,
//         discountPercentage,
//         description,
//         isNew,
//         imageUrl,
//         _id
//      }`)
//     const productFetch: IProduct[] = response
//     // console.log(response);

//     return (
//         <div>
//             <Header />
//             <div className=" flex flex-col gap-[30px]">
//                 <div className="container mt-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-[48px] ">
//                     {/* 1st */}
//                     {productFetch.map((products) => (
//                         <div key={products._id} className="flex flex-col  text-center  ">
//                             {/* Image */}
//                             <div>
//                                 <Image src={urlFor(products.imageUrl).url()}
//                                     alt="product "
//                                     width={239}
//                                     height={280}>

//                                 </Image>
//                             </div>
//                             {/* Text */}
//                             <div className="bg-white">
//                                 <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
//                                     <div >
//                                         <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >{products.title}</h5>
//                                     </div>
//                                     <div>
//                                         <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >{products.tags}</h5>

//                                     </div>

//                                     <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
//                                         <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >${products.price}</h5> 
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </div>
//     )
// }



import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/header";
import { client } from "@/sanity/lib/client";

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




export default async function BestSeller() {
    const response = await client.fetch(`*[_type == "product"]{
         title,
         price ,
         tags,
         discountPercentage,
         description,
         isNew,
         imageUrl,
         _id
    }`)
    const products: IProduct[] = response
    const newArrivals = products.filter(product => product.isNew)

    return (
        <div className=" flex flex-col gap-[30px]">
            <Header />
            <div className="container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-[48px] ">
                {newArrivals.map((products) => (
                    <div key={products._id} className="flex flex-col  text-center  ">
                        {/* Image */}
                        <div className="">
                            <Image src={urlFor(products.imageUrl).width(500).url()}
                                alt={products.title}
                                width={300}
                                height={200}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="bg-white">
                            <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                                <div >
                                    <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >{products.title}</h5>

                                </div>
                                <div>
                                    <h5 className="font-bold text-sm text-gray line-clamp-1 " style={{ letterSpacing: "0.2px" }} >{products.description}</h5>
                                </div>
                                <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                    <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >${products.price}</h5>
                                    <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
