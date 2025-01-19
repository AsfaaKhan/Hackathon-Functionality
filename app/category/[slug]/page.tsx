import { sanityClient } from "@/sanity/lib/sanityClient";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Header from "@/components/header";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react";



interface Props {
    params: {
        slug: string;
    };
}


export default async function CategoryPage({ params }: Props) {
    const { slug } = params;
    const query = `
    *[_type == "category" && slug.current == $slug][0] {
      name,
      "products": *[_type == "product" && references(^._id)]
      {
        title,
        imageUrl,
        price
      }
    }
  `;



    const category = await sanityClient.fetch(query, { slug });

    return (
        <div>
            <Header />
            {/* Road map */}
            <div className="container my-10 ">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/productPage" className="text-black">Category</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="container">
                    <h1  className="text-3xl font-bold">Category :
                        <span className="text-darkBlue italic underline ">
                        {slug.toUpperCase()}
                            </span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {category.products.map((product: any) => (
                        <div key={product.title} className="p-4 border rounded">
                            <Image
                                src={urlFor(product.imageUrl).url()}
                                alt={product.title}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                            <p className="text-gray-700 mt-1">${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}