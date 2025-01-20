
import ProductCard from "@/components/ProductCart";
import Header from "@/components/header";

const ProductPage = async () => {


  return (
    <div>
      <Header/>
      <h1 className="text-2xl font-bold text-center my-8">Shop All Products</h1>
      <ProductCard />
     
    </div>
  );
};

export default ProductPage;
