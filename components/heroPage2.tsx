import Image from "next/image"
import Button2 from "./button2"
import Button3 from "./button3"

export default function HeroPage2() {
    return (
        <div className="">
            {/* 1st row */}
            <div className="bg-green text-white">

                <div className="container pt-28 pb-28 gap-20 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between lg:text-start lg:items-start ">

                    {/* Text */}
                    <div className="flex flex-col sm:w-[509px] gap-[30px] p-[60px] ">

                        <div className="font-normal text-xl leading-[30px]" style={{ letterSpacing: "0.2px" }}><h1>SUMMER 2020</h1></div>
                        <div className="font-bold text-[58px] leading-[80px]" style={{ letterSpacing: "0.2px" }}><h1>Vita Classic Product</h1></div>

                        <div className="font-normal text-sm sm:w-[341px]" style={{ letterSpacing: "0.2px" }}> <h1>We know how large objects will act, We know how are objects will act, We know</h1></div>

                        <div className="flex gap-[30px] items-center">
                            <h3 className="font-bold text-2xl" style={{ letterSpacing: "0.1px" }}> $16.48</h3>
                            <Button2 name="ADD TO CART" />
                        </div>

                    </div>

                    {/* Image */}
                    <div>
                        <Image src={"/images/shop-hero-2-png-picture-1.svg"}
                            alt="heropage-image"
                            width={510}
                            height={684}></Image>
                    </div>

                </div>


            </div>

            {/* 2nd Row */}

            <div className=" bg-white  ">
                <div className="container pt-28 pb-28 gap-20 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between lg:text-start lg:items-start ">


                    {/* Image */}
                    <div>
                        <Image src={"/images/asian-woman-man-with-winter-clothes 1.svg"}
                            alt="heropage-image"
                            width={450}
                            height={684}></Image>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col  sm:w-[509px] gap-[30px] p-[60px] text-center items-center justify-center  ">

                        <div className="font-bold text-lightgray text-base leading-[30px]" style={{ letterSpacing: "0.1px" }}><h1>SUMMER 2020</h1></div>
                        <div className="text-darkBlue font-bold  lg:text-[40px] leading-[50px]" style={{ letterSpacing: "0.2px" }}><h1>Part of the Neural
                            Universe</h1></div>

                        <div className="font-normal text-sm sm:text-[20px] leading-[30px] " style={{ letterSpacing: "0.2px" }}> <h1>We know how large objects will act,
                            but things on a small scale.</h1></div>

                        <div className="flex flex-col sm:flex-row gap-[10px] items-center">

                            <Button2 name="BUY NOW" />
                            <Button3 name="READ MORE" />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
