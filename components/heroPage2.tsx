import Image from "next/image"
import Button2 from "./button2"

export default function HeroPage2() {
    return (
        <div className="">
            {/* 1st row */}
            <div className="bg-dullWhite">

                <div className="container pt-28 pb-28 gap-20 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between lg:text-start lg:items-start text-darkBlue ">

                    {/* Text */}
                    <div className="flex flex-col sm:w-[509px] gap-[30px] p-[60px] ">

                        <div className="font-normal text-xl leading-[30px]" style={{ letterSpacing: "0.2px" }}><h1>SUMMER 2025</h1></div>
                        <div className="font-bold text-[58px] leading-[80px]" style={{ letterSpacing: "0.2px" }}><h1>Vita Classic Product</h1></div>

                        <div className="font-normal text-sm sm:w-[341px]" style={{ letterSpacing: "0.2px" }}> <h1>Style Your Home, Your Way</h1></div>

                        <div className="flex gap-[30px] items-center">
                            <h3 className="font-bold text-2xl" style={{ letterSpacing: "0.1px" }}> $16.48</h3>
                            <Button2 name="ADD TO CART" />
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <Image src={"/sanity/4.png"}
                            alt="heropage-image"
                            width={510}
                            height={684}></Image>
                    </div>

                </div>


            </div>
        </div>
    )
}
