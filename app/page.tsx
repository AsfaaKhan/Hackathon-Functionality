import HeadLine from "@/components/headline";
import Header from "@/components/header";
import Gallery from "@/components/gallery";
import HeroPage2 from "@/components/heroPage2";
import Post from "@/components/post";
import HeroPage from "@/components/heroPage";
import NewArrivals from "@/components/NewArrivals";
// import NewArrivals from "@/components/NwArrivals";



export default async function Home() {


  return (
    <div>
      <HeadLine />
      <Header />
      <HeroPage />
      <Gallery />
      <NewArrivals/>
      {/* <NewArrivals newArrivals={newArrivals} /> */}
      <HeroPage2 />
      <Post />
    </div>
  );
}
