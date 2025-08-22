import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className='p-4 '>
      <h2>Products</h2>
      <div className=' md:grid lg:grid-cols-4  md:grid-cols-2 flex flex-col gap-2'>
        {products.map(product => (
          <div  className='border-[1px] raounded-lg p-2 text-center flex flex-col justify-center items-center '
            key={product.id} ><img className='w-[100px] h-[100px] object-fit'
              src={product.image} 
              alt={product.title} 
         
            />
            <h3>{product.title}</h3>
            <p><strong>${product.price}</strong></p>
            <p className='size-14px  text-black '>
              {product.description.slice(0, 50)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
