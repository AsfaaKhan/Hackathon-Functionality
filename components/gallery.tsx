import Button1 from "./button1";



export default function Gallery() {
    return (

        <div className="pt-20 pb-20 gap-12 ">

            {/* Heading */}
            <div className="container pt-20 pb-20  flex flex-col justify-center items-center text-center gap-[10px]">
                <h3 className="font-bold text-2xl text-darkBlue" style={{ "letterSpacing": "0.1px" }}>{`EDITOR’S PICK`}</h3>
                <p className="font-normal text-sm  text-gray" style={{ "letterSpacing": "0.2px" }}>Problems trying to resolve the conflict between </p>

            </div>

            {/* Gallery */}
            <div className="container flex flex-col  gap-[30px]  lg:flex-row">
                {/* 1st side */}

                <div className=" w-full lg:w-[500px] h-[500px]  bg-[url('/images/1.svg')] bg-no-repeat bg-cover bg-center ">
                    <div className=" pt-[400px] pl-[14px]"> <Button1 name="Men" /></div>

                </div>


                {/* 2nd side */}
                <div className="flex-1 flex flex-col  lg:flex-row gap-[30px]" >

                    {/* Image1 */}
                    <div className="flex-1">
                        <div className=" h-[500px] w-full lg:w-[240px] sm:h-[500px]  bg-[url('/images/2.svg')] bg-no-repeat bg-cover bg-center ">
                            <div className=" pt-[400px] pl-[14px]"> <Button1 name="WOMEN" />
                            </div>
                        </div>
                    </div>

                    {/* Image2 */}
                    <div className="flex flex-col  sm:flex-row    lg:flex-col  gap-4">

                        {/* 3rd Image */}

                        <div className="w-full  lg:w-[240px]   h-[240px] bg-[url('/images/3.svg')] bg-no-repeat bg-cover bg-center ">
                            <div className="mt-[171px] ml-[14px]"> <Button1 name="ACCESSORIES" />

                            </div>
                        </div>

                        {/* 4th Image */}

                        <div className="w-full lg:w-[240px]  h-[240px] bg-[url('/images/4.svg')] bg-no-repeat bg-cover bg-center ">
                            <div className="mt-[171px] ml-[14px]"> <Button1 name="KIDS" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}