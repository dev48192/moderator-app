import React, { useEffect, useState } from 'react';
import Styles from './ProductSuggestions.module.scss';
import { fetchProductsByCategory } from '../../mock/productList';
import ProductCard from '../ProductCard';
import get from 'lodash/get';

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

  const getProductSelectedDetails = (id) => {
    if(get(allProductsInfo, 'published.best_picks', []).includes(id)){
      return 1;
    }
    if(get(allProductsInfo, 'published.upgrade_picks', []).includes(id)){
      return 2;
    }
    if(get(allProductsInfo, 'published.eco_picks', []).includes(id)){
      return 3;
    }

    return 0;
  };

  if(loading) return null;
  
  return (
    <div className={Styles['product-suggestions-content']}>
      <div className={Styles['product-grid']}>
        {allProductsInfo['products']?.map((product, index)=>(
          <ProductCard key={`${product['asin_id']}-${index}`} product={product} selected={getProductSelectedDetails(product['asin_id'])}/>
        ))}
      </div>
    </div>
  )
}

export default ProductSuggestions