import Image from "next/image"

export default function TeamHeroPage() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {/* LEFT SIDE IMAGE  */}
                <div className="sm:col-span-2 row-span-2">
                    <Image src={"/sanity/1.jpg"}
                        alt="hero image left side"
                        width={760}
                        height={400}
                    >
                    </Image>
                </div>

                {/* RIGHT SIDE IMAGE */}

                <div>
                    <Image src={"/sanity/1-min.png"}
                        alt="hero image left side"
                        width={400}
                        height={200}
                    >
                    </Image>
                </div>
                <div>
                    <Image src={"/sanity/3.jpg"}
                        alt="hero image left side"
                        width={400}
                        height={200}
                    >
                    </Image>
                </div>
                <div>
                    <Image src={"/sanity/4.jpg"}
                        alt="hero image left side"
                        width={400}
                        height={300}
                    >
                    </Image>
                </div>
                <div>
                    <Image src={"/sanity/5.jpg"}
                        alt="hero image left side"
                        width={400}
                        height={300}
                    >
                    </Image>
                </div>
            </div>
        </div>
    )
}