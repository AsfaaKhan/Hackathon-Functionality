import Image from "next/image"
import HeadLine2 from "@/components/headline2";
import Header from "@/components/header";
import BestSeller from "@/components/bestsellerproduct"
import Link from "next/link"
import { PiGreaterThanLight } from "react-icons/pi";
import { Slash } from "lucide-react"
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { EyeIcon } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"
import Button from "@/components/button";


export default function Product1() {
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
                            <Image src={"/sellerproduct/col-md-6.svg"}
                                alt="shop"
                                width={506}
                                height={450}></Image>
                        </div>

                        <div className=" md:w-1/2 flex flex-col gap-[10px]">
                            <div>
                                <h1 className="text-darkBlue font-bold text-xl leading-[30px] " style={{ letterSpacing: "0.2px" }}>Floating Phone</h1>
                            </div>
                            <div className="flex gap-[10px] ">
                                <Image src={"/sellerproduct/stars.svg"}
                                    alt="star"
                                    width={130}
                                    height={20}>

                                </Image>
                                <p className="text-gray font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2px" }}>10 Reviews</p>
                            </div>
                            <div>
                                <h1 className="text-darkBlue font-bold text-xl leading-[32px] " style={{ letterSpacing: "0.1px" }}>$1,139.33</h1>
                            </div>
                            <div className="flex gap-[5px]  font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2px" }}>
                                <h6 className="text-gray">Availability  :</h6>
                                <h6 className="text-skyblue">In Stock </h6>
                            </div>
                            <div>
                                <p className="  font-normal text-sm leading-[20px] text-gray " style={{ letterSpacing: "0.2px" }} >Met minim Mollie non desert Alamo est sit cliquey dolor
                                    do met sent. RELIT official consequent door ENIM RELIT Mollie.
                                    Excitation venial consequent sent nostrum met.</p>
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
                    {/* seller product */}
                    <BestSeller />
                </div>
            </div>

        </div>
    )
}