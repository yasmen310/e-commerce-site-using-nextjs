"use client";

import { useCart } from "@/app/context/CartContext";
import { toast } from "react-toastify"; 

interface AddToCartButtonProps {
  product: any;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { cart, addToCart } = useCart(); 

  const handleAddToCart = () => {
    const isAlreadyInCart = cart.some((item: any) => item.id === product.id);

    if (isAlreadyInCart) {
      toast.warning("Item is already in the cart!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } else {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
      toast.success("Item added to the cart successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <button className="btn btn-success mt-2" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
