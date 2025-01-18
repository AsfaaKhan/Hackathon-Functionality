"use client"
import { useState } from "react"
import Link from "next/link"
import { Inter } from "next/font/google"
import { CiSearch } from "react-icons/ci"
import { BiMenuAltRight } from "react-icons/bi"; import { CiHeart } from "react-icons/ci"
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";

import { NavigationMenu, NavigationMenuList ,NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger } from "./ui/navigation-menu"



// FONT INTER
const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Header() {
    const [navbar, setNavbar] = useState(false)

    const handleNavbar = () => {
        setNavbar(!navbar);
    }
    return (
        <div className="container">
            <nav >
                <div className=" h-[58px]  flex items-center text-center justify-between ">
                    {/*             LOGO                    */}
                    <div className=" text-2xl font-bold text-darkBlue bg-[#ffffff]">
                        <h3>Bandage</h3>
                    </div>



                    {/*             NAVBAR ITEMS                  */}
                    <div className="hidden lg:flex gap-[15px]    font-bold   justify-center items-center text-sm leading-6 text-gray text-center " style={{ "letterSpacing": "0.1px" }}>
                        <Link className="  hover:underline hover:text-darkBlue  " href="/">Home</Link>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="flex flex-col  w-[400px] gap-3 p-4   ">
                                        <li><Link className="  hover:underline hover:text-darkBlue  " href={"/productPage"}>Product List Page</Link></li>
                                        <li><Link className="  hover:underline hover:text-darkBlue  " href={"/product1"}>Product Detail</Link></li>
                                    </ul>
                                </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <Link className="  hover:underline hover:text-darkBlue  " href={"/aboutPage"}>About</Link>
                        <Link className="  hover:underline hover:text-darkBlue  " href="/team">Blog</Link>
                        <Link className=" hover:underline hover:text-darkBlue " href="/contactPage"> Contact</Link>
                        <Link className=" hover:underline hover:text-darkBlue  " href="/product1"> Pages</Link>
                    </div>


                    {/*         Navbar Icons Anths        */}
                    <div className="flex  items-center ">

                        <div className=" ">
                            <button className=" hidden text-skyblue lg:flex justify-center text-center items-center">
                                <FaRegUser size={15} />
                                <Link href={"/"} className="font-bold   text-sm " style={{ "letterSpacing": '0.2px' }}>Login / Register</Link>
                            </button>
                        </div>
                        {/* btn1 */}
                        <div>
                            <button className="text-darkBlue rounded-[37px] p-[15px] gap-[5px] lg:text-skyblue" >
                                <CiSearch size={20} />
                            </button>
                        </div>
                        {/* btn2 */}
                        <div className=" ">
                            <button className="text-darkBlue flex  gap-1  rounded-[37px] p-[15px] gp-[5px] lg:text-skyblue">
                                <PiShoppingCart size={20} />
                                <span>1</span>
                            </button>
                        </div>
                        {/* btn3 */}
                        <div className="">
                            <button className="hidden lg:flex gap-1 rounded-[37px] p-[15px] gp-[5px] text-skyblue">
                                <CiHeart size={20} />
                                <span>1</span>
                            </button>

                        </div>

                    </div>


                    {/* HAMBURGER FOR SMALL DEVICES / MOBILES  */}
                    <div className="lg:hidden  flex text-black  cursor-pointer  " onClick={handleNavbar} >
                        <BiMenuAltRight className="text-4xl  hover:text-darkBlue w-8 h-8" />
                    </div>
                </div>

                {navbar && (
                    <div className={`lg:hidden bg-white p-4 border-[2px] text-center  ${inter.className}`}>
                        <Link href="/" className="block text-darkBlue py-2   hover:underline hover:text-darkBlue " onClick={handleNavbar}>Home</Link>

                        <Link href="/aboutPage" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>About</Link>

                        <Link href="/productPage" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Product</Link>

                        <Link href="/price" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Pricing</Link>
                        <div className=" flex justify-center items-center text-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                <ul className="flex flex-col w-[150px] gap-3 p-4   ">
                                        <li><Link className="  hover:underline hover:text-darkBlue  " href={"/productPage"}>Product List Page</Link></li>
                                        <li><Link className="  hover:underline hover:text-darkBlue  " href={"/product1"}>Product Detail</Link></li>
                                    </ul>
                                </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        </div>
                       

                        <Link href="/team" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Team</Link>

                        <Link href="/contactPage" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Contact</Link>
                    </div>
                )}
            </nav>

            <div className="border-[0.5px]"></div>

        </div>
    )
}

