import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "@/app/lib/products";
import DescriptionToggle from "./DescriptionToggle";
import WishlistButton from "./WishlistButton";
import AddToCartButton from "./AddToCartButton";
import "react-toastify/dist/ReactToastify.css";

export default async function ProductsList() {
  const products = await fetchProducts();

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm d-flex flex-column">
            <div className="image-container">
              <Image
                src={product.image}
                alt={product.title}
                width={250}
                height={250}
                className="card-img-top img-fluid" 
                style={{ objectFit: 'cover', height: '200px' }}
              />
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-truncate" style={{ maxHeight: '2.5rem' }}>
                {product.title}
              </h5>

              <DescriptionToggle
                text={product.description}
                className="text-truncate"
                style={{ maxHeight: '5rem', overflow: 'hidden', textOverflow: 'ellipsis' }}
              />

              <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="fw-bold text-primary">${product.price}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
            
                  <WishlistButton product={product} />
                  <AddToCartButton product={product} />
                </div>
          

              <Link href={`/product/${product.id}`} className="btn btn-outline-primary w-100 mt-2">
                Show Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
