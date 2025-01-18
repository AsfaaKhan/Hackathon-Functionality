import HeadLine2 from "@/components/headline2"
import Header from "@/components/header"
import Products from "@/components/productList"
import { Slash } from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"


export default function ProductList() {
    return (
        <div>

            {/* Headline */}
            <div>
                <HeadLine2 />
            </div>

            {/* Header */}
            <Header />

            {/*  */}
            <div>

                {/* Heading */}
                <div className="pt-[24px] pb-[24px] bg-[#FAFAFA]">
                    <div className="container flex flex-col md:flex-row md:justify-between gap-[30px]">
                        <div><h3 className="font-bold text-2xl " style={{ letterSpacing: "0.1px" }}>Shop</h3></div>
                        <div >
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

                </div>
            </div>
            

            {/* Product deatil */}
            <Products />


        </div>
    )
}