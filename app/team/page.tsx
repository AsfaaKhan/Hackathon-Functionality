import TeamHeroPage from "@/components/teamheropage"
import OurTeam from "@/components/team";
import Button from "@/components/button";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
export default function Team() {
    return (
        <div>

            {/* Price Section */}

            <div>
                {/* Heading */}
                <div className="container pt-[80px] pb-[80px] flex flex-col justify-center items-center text-center gap-[10px]">
                    <p className="font-bold text-base  text-gray" style={{ "letterSpacing": "0.1px" }}>WHAT WE DO</p>
                    <h3 className="font-bold text-[58px] leading-[80px] text-darkBlue" style={{ "letterSpacing": "0.2px" }}>Innovation tailored for you</h3>
                </div>

                {/* Hero Page */}
                <TeamHeroPage />

                {/* Team Section */}
                <div className="pt-28 pb-28 gap-28">
                    {/* Heading */}
                    <div className="flex justify-center text-center items-center">
                        <h3 className="font-bold text-[40px] leading-[50px] text-darkBlue" style={{ "letterSpacing": "0.2px" }}>Meet Our Team</h3>
                    </div>

                    {/* Team */}
                    <OurTeam />
                </div>

                {/* End Time */}
                <div className="container flex flex-col   pt-28 pb-28  sm:w-[509px] gap-[35px] p-[60px] text-center items-center justify-center ">

                        <div className="font-bold  text-darkBlue text-[40px] leading-[50px]" style={{ letterSpacing: "0.2px" }}><h1>Start your 14 days free trial</h1></div>

                        <div className="font-normal text-sm leading-[20px]  text-gray " style={{ letterSpacing: "0.2px" }}> <h1>Met minim Mollie non desert Alamo est sit cliquey dolor 
                        do met sent. RELIT official consequent.</h1></div>

                        <div>
                            <Button name="Try it free now" />
                        </div>
                        <div className="flex gap-[34px] p-[10px]">
                            <ImFacebook2 size={24} className="text-[#55ACEE]"/> 
                            <BsTwitter size={24 } className="text-[#395185] " />
                            < BsInstagram size={24} />
                            <FaLinkedin size={24} className="text-[#0A66C2]"/>
                        </div>
                        

                    </div>
            </div>
        </div>
    )
}