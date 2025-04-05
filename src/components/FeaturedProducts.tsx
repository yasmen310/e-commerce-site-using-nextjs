'use client';

import { useQuery } from '@tanstack/react-query';

const fetchFeaturedProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

const FeaturedProducts = () => {
  const { data: products, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchFeaturedProducts,
  });

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.slice(0, 4).map((product: any) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Price: ${product.price}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
