import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductCategories />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default HomePage;