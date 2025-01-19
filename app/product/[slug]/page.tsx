import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/header";
import { client } from "@/sanity/lib/client";
import { PiGreaterThanLight } from "react-icons/pi";
import HeadLine2 from "@/components/headline2";
import Button from "@/components/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash, EyeIcon, Link } from "lucide-react";
import { CgShoppingCart } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";



interface Props {
    params: { slug: string };
}


interface IProduct {
    title: string,
    price: number,
    tags: string[],
    discountPercentage: number,
    description: string,
    isNew: boolean,
    imageUrl: string,
    _id: number,
    slug: { current: string }
}


export default async function ProductDetailPage({ params }: Props) {
    const { slug } = params;

    const query = await client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]{
      title,
      description,
      discountPercentage,
      price,
      imageUrl,
      slug,
      isNew,
      _id,

    }`);

    // For Dynamic 
    const product: IProduct = query

    // Featured products
    //   const featuredProducts: IProduct[] = query
    //   // console.log(products);

    //   const newArrivals = featuredProducts.filter((product) => product.isNew)
    // console.log(newArrivals)


    if (!product) {
        return <div>Product not found</div>;
    }

    // return (
    //   <div className="container">
    //       <Header/>
    //     <h1 className="text-3xl font-bold my-8">{product.title}</h1>
    //     <div className="flex flex-col md:flex-row items-center gap-8">
    //       <Image
    //         src={urlFor(product.imageUrl).url()}
    //         alt={product.title}
    //         width={400}
    //         height={300}
    //         className="w-full md:w-1/2 object-cover"
    //       >
    //       </Image>
    //       <div className="flex flex-col gap-4">
    //         <p className="text-lg">{product.description}</p>
    //         <p className="text-xl font-semibold">Price: ${product.price}</p>
    //       </div>
    //     </div>
    //   </div>
    // );
    return (
        <div>
            <HeadLine2 />
            <Header />

            {/* First Section */}
            <div>
                <div className="bg-[#FAFAFA]
                ">
                    <div className="container pt-6 pb-6 ">
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
                <div className="container bg-[#FAFAFA]">
                    <div className=" pb-12 flex gap-[30px] flex-col  md:flex-row ">
                        <div className="md:w-1/2">
                            <Image src={urlFor(product.imageUrl).url()}
                                alt={product.title}
                                width={506}
                                height={450}></Image>
                        </div>

                        <div className=" md:w-1/2 flex flex-col gap-[10px]">
                            <div>
                                <h1 className="text-darkBlue font-bold text-xl leading-[30px] " style={{ letterSpacing: "0.2px" }}>{product.title} </h1>
                            </div>
                            <div className="flex gap-[10px] ">
                                <Image src={"/sellerproduct/stars.svg"}
                                    alt="star"
                                    width={130}
                                    height={20}>

                                </Image>
                                <p className="text-gray font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2px" }}>{product.discountPercentage}% Discount</p>
                            </div>
                            <div>
                                <h1 className="text-darkBlue font-bold text-xl leading-[32px] " style={{ letterSpacing: "0.1px" }}>${product.price}</h1>
                            </div>
                            <div className="flex gap-[5px]  font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2px" }}>
                                <h6 className="text-gray">Availability:{product.isNew} </h6>
                                <h6 className="text-skyblue">In Stock </h6>
                            </div>
                            <div>
                                <p className="  font-normal text-sm leading-[20px] text-gray " style={{ letterSpacing: "0.2px" }} >{product.description}</p>
                            </div>
                            <div className="border   border-gray mt-6
                        mb-6 "></div>
                            <div className="pt-5 pb-5">
                                <Image src={"/sellerproduct/product-colors.svg"}
                                    alt="colour"
                                    width={150}
                                    height={30}></Image>
                            </div>

                            <div className="flex  gap-[5px]">

                                <div>
                                    <Button name="Select Options" />
                                </div>
                                <div className="flex justify-center items-center text-center gap-[10px]">
                                    <div className="rounded-[44.79px] bg-white"><CiHeart size={35} /></div>
                                    <div className=" rounded-[44.79px] bg-white">
                                        <CgShoppingCart size={35} />
                                    </div>
                                    <div className=" rounded-[44.79px] bg-white">
                                        < EyeIcon size={35} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Middle Section */}
            <div>

                {/* Heading */}
                <div className="container">
                    <div className="flex justify-center items-center text-center text-gray font-bold text-sm gap-2 " style={{ letterSpacing: "0.2px" }}>
                        <div className="p-6"> <Link href={"/"}>Description</Link></div>
                        <div className="p-6"> <Link href={"/"}>Additional Information</Link></div>
                        <div className="p-6"> <Link href={"/"}>Reviews</Link></div>
                    </div>
                </div>

                {/* Content */}
                <div className="container  justify-center items-center text-center  pt-6 pb-12 gap-[30px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                    <div className="rounded-[5.39px]">
                        <Image src={"/sellerproduct/section2.svg"}
                            alt="pitcure"
                            width={316}
                            height={271}></Image>
                    </div>


                    <div>
                        <div className="rounded-[9px] flex text-darkBlue
                 font-bold text-2xl p-[25px] gap-[30px"style={{ letterSpacing: "0.1px" }} >
                            <h1>the quick fox jumps over </h1> </div>
                        <div className=" text-gray font-normal text-sm "
                            style={{ letterSpacing: "0.2px" }}>
                            <p>{`Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.`}
                                <br />
                                <br />

                                {`Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.`}
                                <br />
                                <br />
                                {`Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.`}</p>
                        </div>
                    </div>

                    <div className=" gap-[30px] ">
                        <div>
                            <div className="rounded-[9px] flex text-darkBlue
                 font-bold text-2xl p-[25px] gap-[30px"style={{ letterSpacing: "0.1px" }} >
                                <h1>the quick fox jumps over </h1> </div>
                            <div>
                                <div className="flex gap-5">
                                    <PiGreaterThanLight />
                                    <h6>the quick fox jumps over the lazy dog</h6>
                                </div>
                                <div className="flex gap-5">
                                    <PiGreaterThanLight />
                                    <h6>the quick fox jumps over the lazy dog</h6>
                                </div>
                                <div className="flex gap-5">
                                    <PiGreaterThanLight />
                                    <h6>the quick fox jumps over the lazy dog</h6>
                                </div>
                                <div className="flex gap-5">
                                    <PiGreaterThanLight />
                                    <h6>the quick fox jumps over the lazy dog</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="rounded-[9px] flex text-darkBlue
                 font-bold text-2xl p-[25px] gap-[30px"style={{ letterSpacing: "0.1px" }} >
                                <h1>the quick fox jumps over </h1> </div>
                            <div>
                                <div className="flex gap-5">
                                    <PiGreaterThanLight />
                                    <h6>the quick fox jumps over the lazy dog</h6>
                                </div>
                                <div className="flex gap-5">
                                    <PiGreaterThanLight />
                                    <h6>the quick fox jumps over the lazy dog</h6>
                                </div>
                                <div className="flex gap-5">
                                    <PiGreaterThanLight />
                                    <h6>the quick fox jumps over the lazy dog</h6>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </div>






            {/* Last section */}
            <div className="bg-lightgray ">
                <div className="container
             pt-[48px] pb-[48px] gap-6 flex flex-col ">
                    {/* Heading */}
                    <div className="gap-[10px]">
                        <h3 className="font-bold text-2xl text-darkBlue flex- justify-start items-start text-start" style={{ letterSpacing: "0.1px" }}>BESTSELLER PRODUCTS</h3>

                    </div>


                    {/* 3rd Section */}
                    <div className=" flex flex-col gap-[30px]">

                        {/* 1st Row */}
                        {/* <div className="container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-[48px] ">
                                {newArrivals.map((product) => (
                                    <div key={product._id} className="flex flex-col items-center text-center border-[1px] rounded-md  shadow-md ">
                                        

                                        <div className=" flex  flex-col justify-center items-center w-full h-[400px] rounded-sm">
                                            <Image src={urlFor(product.imageUrl).url()}
                                                alt={product.imageUrl}
                                                width={300}
                                                height={300}>
                                            </Image>
                                        </div>
                                        
                                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                                            <div >
                                                <h5 className="text-darkBlue font-bold text-base " style={{ letterSpacing: "0.1px" }} >{product.title}</h5>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-sm text-gray line-clamp-1 " style={{ letterSpacing: "0.2px" }} >{product.description} </h5>
                                            </div>
                
                                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >${product.price}</h5>
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
                
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    )


}

