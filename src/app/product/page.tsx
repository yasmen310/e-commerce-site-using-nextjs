import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsList from "@/components/ProductsList";
import OrderHistory from "@/app/profile/OrderHistory";
import UserProfile from "@/components/UserProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductsPage() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="container py-5">
        <h1 className="text-center mb-4">Shop Our Products</h1>
        <ProductsList />

        {/* Server Component: User Profile & Order History */}
        <div className="mt-5">
          {/* <UserProfile /> */}
          {/* <OrderHistory /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
