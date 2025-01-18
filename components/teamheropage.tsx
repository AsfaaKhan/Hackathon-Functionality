import Image from "next/image"

export default function TeamHeroPage() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {/* LEFT SIDE IMAGE  */}
                <div className="sm:col-span-2 row-span-2">
                    <Image src={"/team/team1.svg"}
                    alt="hero image left side"
                    width={700}
                    height={530}
                    >
                    </Image>
                </div>

                {/* RIGHT SIDE IMAGE */}
                
                <div>
                <Image src={"/team/team2.svg"}
                    alt="hero image left side"
                    width={700}
                    height={530}
                    >
                    </Image>
                </div>
                <div>
                <Image src={"/team/team3.svg"}
                    alt="hero image left side"
                    width={700}
                    height={530}
                    >
                    </Image>
                </div>
                <div>
                <Image src={"/team/team4.svg"}
                    alt="hero image left side"
                    width={700}
                    height={530}
                    >
                    </Image>
                </div>
                <div>
                <Image src={"/team/team5.svg"}
                    alt="hero image left side"
                    width={700}
                    height={530}
                    >
                    </Image>
                </div>
                    </div>

              
                </div>
    )
}