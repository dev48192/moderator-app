import React, { useEffect, useState } from 'react';
import Styles from './ProductSuggestions.module.scss';
import { fetchProductsByCategory } from '../../mock/productList';
import ProductCard from '../ProductCard';

const ProductSuggestions: React.FC = () => {
  const [allProductsInfo, setAllProductsInfo] = useState({});
  const [loading, setLoading] =  useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProductsByCategory();
        setAllProductsInfo(response.data);
      } catch (error) {
        console.error('API call failed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if(loading) return null;
  
  return (
    <div className={Styles['product-suggestions-content']}>
      <div className={Styles['product-grid']}>
        {allProductsInfo['products']?.map((product, index)=>(
          <ProductCard key={`${product['asin_id']}-${index}`} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductSuggestions