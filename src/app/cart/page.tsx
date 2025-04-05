"use client";

import { useCart } from "../context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { fetchCartSummary } from "@/components/cartSummary";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { data: summary, isLoading } = useQuery({
    queryKey: ["cartSummary", cart],
    queryFn: () => fetchCartSummary(cart),
    enabled: cart.length > 0,
  });
  
  const router = useRouter();

  const goToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Your Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="row">
              {cart.map((item) => (
                <div key={item.id} className="col-md-6 mb-3">
                  <div className="card p-3">
                    <div className="d-flex align-items-center gap-3">
                      <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                      <h5 className="card-title mb-0">{item.title}</h5>
                    </div>

                    <p className="mt-2">Price: ${item.price}</p>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="d-flex align-items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="btn btn-outline-secondary">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn btn-outline-secondary">+</button>
                      </div>

                      <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 border rounded">
              <h4>Order Summary</h4>
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

            <button onClick={goToCheckout} className="btn btn-success mt-4">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
