"use client";

import { useCart } from "../context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { fetchCartSummary } from "@/components/cartSummary";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { data: summary, isLoading } = useQuery({
    queryKey: ["cartSummary", cart],
    queryFn: () => fetchCartSummary(cart),
    enabled: cart.length > 0,
  });
  
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for submitting order details can be added here
    console.log("Order submitted", shippingInfo);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Checkout</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty. Add items to your cart to proceed.</p>
        ) : (
          <>
            <div className="row">
              <div className="col-md-8">
                <h3>Shipping Information</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" id="name" name="name" value={shippingInfo.name} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" id="address" name="address" value={shippingInfo.address} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" id="city" name="city" value={shippingInfo.city} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="zipCode" className="form-label">ZIP Code</label>
                    <input type="text" id="zipCode" name="zipCode" value={shippingInfo.zipCode} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" value={shippingInfo.phoneNumber} onChange={handleChange} className="form-control" required />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 mt-3">Place Order</button>
                </form>
              </div>

              <div className="col-md-4">
                <h3>Order Summary</h3>
                {isLoading ? (
                  <p>Loading summary...</p>
                ) : (
                  <>
                    <p>Subtotal: ${summary?.total.toFixed(2)}</p>
                    <p>Shipping: ${summary?.shipping.toFixed(2)}</p>
                    <h5>Total: ${summary?.grandTotal.toFixed(2)}</h5>
                  </>
                  
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
