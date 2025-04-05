import { getUserData } from "../lib/user";
import ProfileClientWrapper from "./ProfileClient";
import OrderHistory from "./OrderHistory";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function ProfilePage() {
  const user = await getUserData();

  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center min-vh-100 my-5">
        <div className="card p-4 shadow-lg rounded-lg bg-light w-100" style={{ maxWidth: "100%" }}>
          <h1 className="text-center text-primary mb-4">User Profile</h1>

          <div className="mb-4 p-3 border rounded bg-white shadow-sm">
            <ProfileClientWrapper user={user} />
          </div>

          <div className="mt-4 p-3 border rounded bg-white shadow-sm">
            <OrderHistory />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
