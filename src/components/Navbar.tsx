"use client"; 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Fashion Site
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" passHref style={{ color: "black", textDecoration: "none" }}>
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/product" passHref style={{ color: "black", textDecoration: "none" }}>
                <span className="nav-link">Shop</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/wishlist" passHref style={{ color: "black", textDecoration: "none" }}>
                <span className="nav-link">WishList</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/auth/signin" passHref style={{ color: "black", textDecoration: "none" }}>
                <span className="nav-link">login</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/profile" passHref>
                <span className="nav-link" style={{ color: "black", textDecoration: "none" }}>
                  <Image src="/images/profile.png" alt="Profile" width={24} height={24} />
                </span>
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link href="/cart" passHref>
                <span className="nav-link position-relative" style={{ color: "black", textDecoration: "none" }}>
                  <Image src="/images/cart.png" alt="Cart" width={24} height={24} />
                  {totalItems > 0 && (
                    <span
                      className="position-absolute top-10 start-95 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.6rem", padding: "2px 6px" }}
                    >
                      {totalItems}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
