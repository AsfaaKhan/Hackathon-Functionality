"use client"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/header";
import { client } from "@/sanity/lib/client";
import HeadLine2 from "@/components/headline2";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash, EyeIcon } from "lucide-react";
import { CgShoppingCart } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { useCart } from "@/app/context/CartContext";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import RelatedProducts from "@/components/relatedProduct";
import Footer from "@/components/footer";


interface Props {
    params: { slug: string };
}


export default function ProductDetailPage({ params }: Props) {
    const { slug } = params;
    const { addToCart } = useCart();// Get the Add to Cart function from the context
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
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
            setProduct(query);
        }
        fetchProduct()
    }, [slug])



    const handleAddToCart = (product: Product) => {
        addToCart(product);
        alert(`${product.title} added to cart!`);
    };


    if (!product) {
        return <div className="container  ">
            <Header />
            <h1 className=" h-screen flex flex-col  justify-center items-center font-bold text-4xl ">Product Not Found</h1>
            <Footer />
        </div>;
    }

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
                <div className="container mt-5 ">
                    <div className=" pb-12 flex gap-[30px] flex-col  md:flex-row ">
                        <div className="md:w-1/2">
                            <Image src={urlFor(product.imageUrl).url()}
                                alt={product.title}
                                width={506}
                                height={450}></Image>
                        </div>

                        <div className=" md:w-1/2 flex flex-col gap-[10px]">
                            <div>
                                <h1 className="text-darkBlue font-bold text-2xl leading-[30px] " style={{ letterSpacing: "0.2px" }}>{product.title} </h1>
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
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Add to Cart
                                    </button>
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

            <div className="bg-dullWhite ">
                <RelatedProducts />
            </div>
        </div>
    )
}

