"use client";

import { useWishlist } from "../context/WishlistContext";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <h1 className="text-center mb-4">My Wishlist</h1>

        {wishlist.length === 0 ? (
          <p className="text-center">Your wishlist is empty.</p>
        ) : (
          <div className="row">
            {wishlist.map((product) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-muted">{product.description.slice(0, 60)}...</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-primary">${product.price}</span>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromWishlist(product.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <Link href={`/product/${product.id}`} className="btn btn-outline-primary w-100 mt-2">
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
