"use client";
import { signIn } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SignInPage() {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow-lg p-5" style={{ width: "100%", maxWidth: "400px", borderRadius: "1rem" }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Welcome Back</h2>
            <p className="text-muted">Please sign in to continue</p>
          </div>

          <div className="d-grid gap-3">
            <button
              onClick={() => signIn("google")}
              className="btn btn-outline-danger d-flex align-items-center justify-content-center gap-2"
            >
              <i className="bi bi-google"></i> Sign in with Google
            </button>

            <button
              onClick={() => signIn("facebook")}
              className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2"
            >
              <i className="bi bi-facebook"></i> Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
