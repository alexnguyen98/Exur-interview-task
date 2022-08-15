import React from 'react';
import { useProductOverview } from '../../../hooks/api';
import { Product } from '../../../types/product';
import Text from '../../common/Text';
import Loading from '../../icons/Loading';
import ProductItem from './ProductItem';

const ProductOverview: React.FC = () => {
  const { data, loading, error } = useProductOverview();

  if (loading)
    return (
      <div className="flex justify-center py-10">
        <Loading className="fill-current text-blue-700 w-24 animate-spin" />
      </div>
    );

  if (error) return <div>An error occured!</div>;

  if (!data?.results.length)
    return (
      <div className="my-10 bg-zinc-100 p-10 text-center">
        No products found.
      </div>
    );

  return (
    <>
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-5">
        {data?.results?.map((i: Product) => (
          <ProductItem key={i.id} data={i} />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="bg-zinc-200 px-5 py-2">
          <Text variant="link">{data.currentPage}</Text>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
