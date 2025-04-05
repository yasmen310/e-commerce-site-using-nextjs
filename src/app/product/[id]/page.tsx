"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const fetchProduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id as string),
    enabled: !!id, 
  });

  const handleAddToCart = () => {
    if (!product) return;

    const isAlreadyInCart = cart.some((item: any) => item.id === product.id);

    if (isAlreadyInCart) {
      toast.warning("Item is already in the cart!", { position: "top-center", autoClose: 3000 });
    } else {
      addToCart({ id: product.id, title: product.title, price: product.price, image: product.image, quantity });
      toast.success("Item added to the cart successfully!", { position: "top-center", autoClose: 3000 });
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !product) return <p className="text-center text-danger">Product not found</p>;

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="container py-5">
        <div className="row">
        
          <div className="col-md-6">
            <img src={product.image} alt={product.title} className="img-fluid border p-3" style={{ maxHeight: "400px", objectFit: "contain" }} />
          </div>

        
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p className="text-muted">{product.category}</p>
            <h4 className="text-primary">${product.price.toFixed(2)}</h4>
            <p>{product.description}</p>

            
            <div className="mb-3">
              <label className="form-label">Quantity:</label>
              <input
                type="number"
                className="form-control"
                value={quantity}
                min={1}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>

    
            <button className="btn btn-success" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
