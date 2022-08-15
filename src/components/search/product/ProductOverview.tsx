import React from 'react';
import { useProductOverview } from '../../../hooks/api';
import { Product } from '../../../types/product';
import Loading from '../../icons/Loading';
import ProductItem from './ProductItem';

const ProductOverview: React.FC = () => {
  const { data, loading, error } = useProductOverview();

  console.log(data, loading);

  if (loading)
    return (
      <div className="flex justify-center py-10">
        <Loading className="fill-current text-blue-700 w-24 animate-spin" />
      </div>
    );

  if (error) return <div>An error occured!</div>;

  return (
    <div className="grid grid-cols-3 gap-5">
      {data?.results?.map((i: Product) => (
        <ProductItem key={i.id} data={i} />
      ))}
    </div>
  );
};

export default ProductOverview;
