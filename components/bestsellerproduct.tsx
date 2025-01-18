import Image from "next/image";


export default function BestSeller() {
    return (
        <div className=" flex flex-col gap-[30px]">

            {/* 1st Row */}
            <div className="container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-[48px] ">
                {/* 1st */}
                <div className="flex flex-col  text-center  ">
                    {/* Image */}
                    <div className=" flex justify-center w-full  md:w-[400px] h-[400px] rounded-sm">
                        <Image src={"/sellerproduct/1.svg"}
                            alt="product "
                            width={239}
                            height={280}>

                        </Image>
                    </div>
                    {/* Text */}
                    <div className="bg-white">
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>


                        </div>
                    </div>
                </div>

                {/* 2nd */}
                <div className="flex flex-col   text-center ">
                    {/* Image */}
                    <div>
                        <Image src={"/sellerproduct/2.svg"}
                            alt="product "
                            width={239}
                            height={280}>

                        </Image>
                    </div>
                    {/* Text */}
                    <div className="bg-white">
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>


                        </div>
                    </div>
                </div>

                {/* 3rd*/}
                <div className="flex flex-col   text-center  ">
                    {/* Image */}
                    <div>
                        <Image src={"/sellerproduct/3.svg"}
                            alt="product "
                            width={239}
                            height={280}>

                        </Image>
                    </div>
                    {/* Text */}
                    <div className="bg-white">
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>


                        </div>
                    </div>
                </div>

                {/* 4th */}
                <div className="flex flex-col  text-center  ">
                    {/* Image */}
                    <div>
                        <Image src={"/sellerproduct/4.svg"}
                            alt="product "
                            width={239}
                            height={280}>

                        </Image>
                    </div>
                    {/* Text */}
                    <div className="bg-white">
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            {/* 2nd Row */}
            <div className="container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-[48px]  ">
                {/* 1st */}
                <div className="flex flex-col   text-center  ">
                    {/* Image */}
                    <div>
                        <Image src={"/sellerproduct/5.svg"}
                            alt="product "
                            width={239}
                            height={280}>

                        </Image>
                    </div>
                    {/* Text */}
                    <div className="bg-white">
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>


                        </div>
                    </div>
                </div>

                {/* 2nd */}
                <div className="flex flex-col text-center ">
                    {/* Image */}
                    <div>
                        <Image src={"/sellerproduct/6.svg"}
                            alt="product "
                            width={239}
                            height={280}>

                        </Image>
                    </div>
                    {/* Text */}
                    <div className="bg-white">
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>


                        </div>
                    </div>
                </div>

                {/* 3rd*/}
                <div className="flex flex-col   text-center  ">
                    {/* Image */}
                    <div>
                        <Image src={"/sellerproduct/1.svg"}
                            alt="product "
                            width={239}
                            height={280}>

                        </Image>
                    </div>
                    {/* Text */}
                    <div className="bg-white">
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>


                        </div>
                    </div>
                </div>

                {/* 4th */}
                <div className="flex flex-col text-center  ">
                    {/* Image */}
                    <div>
                        <Image src={"/sellerproduct/2.svg"}
                            alt="product "
                            width={239}
                            height={280}>

                        </Image>
                    </div>
                    {/* Text */}
                    <div className="bg-white">
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}


