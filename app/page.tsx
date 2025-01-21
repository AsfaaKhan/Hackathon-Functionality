import Gallery from "@/components/gallery";
import HeroPage2 from "@/components/heroPage2";
import Post from "@/components/post";
import HeroPage from "@/components/heroPage";
import NewArrivals from "@/components/NewArrivals";



export default async function Home() {


  return (
    <div>
      <HeroPage />
      <Gallery />
      <NewArrivals />
      <HeroPage2 />
      <Post /> 
    </div>
  );
}
