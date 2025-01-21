"use client"
import { useState } from "react"
import Link from "next/link"
import { Inter } from "next/font/google"
import { BiMenuAltRight } from "react-icons/bi"; import { CiHeart } from "react-icons/ci"
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import { useCart } from "@/app/context/CartContext"
import { useWishlist } from "@/app/context/wishlistContext";


// FONT INTER
const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})



const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const { cartItems } = useCart();
    const { wishlist } = useWishlist();

    const handleNavbar = () => {
        setNavbar(!navbar);
    }
    return (
        <div className="container">
            <nav >
                <div className=" h-[58px]  flex items-center text-center justify-between ">
                    {/*             LOGO                    */}
                    <div className=" text-2xl font-bold text-darkBlue bg-[#ffffff]">
                        <h3>CozyWood Creations</h3>
                    </div>

                    {/*             NAVBAR ITEMS                  */}
                    <div className="hidden lg:flex gap-[15px]    font-bold   justify-center items-center text-sm leading-6 text-gray text-center " style={{ "letterSpacing": "0.1px" }}>
                        <Link className="  hover:underline hover:text-darkBlue  " href="/">Home</Link>
                        <Link className="  hover:underline hover:text-darkBlue  " href="/productPage">Shop</Link>
                        <Link className="  hover:underline hover:text-darkBlue  " href={"/aboutPage"}>About</Link>
                        <Link className="  hover:underline hover:text-darkBlue  " href="/team">Team</Link>
                        <Link className=" hover:underline hover:text-darkBlue " href="/contactPage"> Contact</Link>
                        <Link className=" hover:underline hover:text-darkBlue  " href="/price"> Price</Link>
                    </div>


                    {/*         Navbar Icons Anths        */}
                    <div className="flex  items-center ">

                        <div className=" ">
                            <button className=" hidden text-skyblue lg:flex justify-center text-center items-center">
                                <FaRegUser size={15} />
                                <Link href={"/"} className="font-bold   text-sm " style={{ "letterSpacing": '0.2px' }}>Login / Register</Link>
                            </button>
                        </div>
                        <div>
                        </div>
                        <div className=" ">
                            <Link href="/cart" className="relative">
                                <PiShoppingCart size={24} />
                                {cartItems.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                        {cartItems.length}
                                    </span>
                                )}
                            </Link>

                        </div>
                        {/* btn3 */}
                        <div className="">
                            <Link href={"/wishlist"} className="relative">
                                <CiHeart size={24} />
                                {wishlist.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white font-bold rounded-full text-sm w-5 h-5 flex items-center justify-center">
                                        {wishlist.length}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>


                    {/* HAMBURGER FOR SMALL DEVICES / MOBILES  */}
                    <div className="lg:hidden  flex text-black cursor-pointer  " onClick={handleNavbar} >
                        <BiMenuAltRight className="text-4xl  hover:text-yellow-400 w-8 h-8" />
                    </div>
                </div>

                {navbar && (
                    <div className={`lg:hidden bg-white p-4 border-[2px] text-center  ${inter.className}`}>
                        <Link href="/" className="block text-darkBlue py-2   hover:underline hover:text-darkBlue " onClick={handleNavbar}>Home</Link>
                        <Link href="/aboutPage" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>About</Link>
                        <Link href="/productPage" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Shop</Link>
                        <Link href="/price" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Pricing</Link>
                        <Link href="/team" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Team</Link>
                        <Link href="/contactPage" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Contact</Link>
                    </div>
                )}
            </nav>

            <div className="border-[0.5px]"></div>

        </div>
    )
}


export default Header

