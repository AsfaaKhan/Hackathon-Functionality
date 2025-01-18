import HeadLine from "@/components/headline";
import Header from "@/components/header";
import HeroPage from "@/components/heroPage";
import Gallery from "@/components/gallery";
import Product from "@/components/product";
import HeroPage2 from "@/components/heroPage2";
import Post from "@/components/post";
export default function Home() {
  return (
    
    <div>
      <HeadLine />
      <Header/>
      <HeroPage/>
      <Gallery/>
      <Product newArrivals={[]} />
      <HeroPage2/>
      <Post/>
    </div>
  );
}
