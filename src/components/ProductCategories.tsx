'use client';

import { useQuery } from '@tanstack/react-query';

const fetchCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
};

const ProductCategories = () => {
  const { data: categories, error, isLoading } = useQuery({
    queryKey: ['categories'], 
    queryFn: fetchCategories,  
  });

  if (isLoading) {
    return <div className="text-center">Loading categories...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error loading categories: {error.message}</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Product Categories</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {categories.map((category: string, index: number) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{category}</h5>
                <p className="card-text">Explore a wide range of products in the {category} category!</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
