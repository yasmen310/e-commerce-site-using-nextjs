"use client";
import { useState } from "react";
import { useWishlist } from "@/app/context/WishlistContext";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

export default function WishlistButton({ product }: { product: any }) {
  const [loading, setLoading] = useState(false);
  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = async () => {
    if (!product || !product.id) {
      console.error("Invalid product:", product); 
      return;
    }
    setLoading(true);
    addToWishlist(product); 
    console.log("Adding to Wishlist:", product);

    
    toast.success("Item added to wishlist!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });

    setLoading(false);
  };

  return (
    <button className="btn btn-outline-danger" onClick={handleAddToWishlist} disabled={loading}>
      {loading ? "Adding..." : "Add to Wishlist"}
    </button>
  );
}
