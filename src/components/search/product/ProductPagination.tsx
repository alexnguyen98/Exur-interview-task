import React from 'react';
import Text from '../../common/Text';

type Props = {
  currentPage: number;
};

const ProductPagination: React.FC<Props> = ({ currentPage }) => (
  <div className="flex justify-center">
    <div className="bg-zinc-200 px-5 py-2">
      <Text variant="link">{currentPage}</Text>
    </div>
  </div>
);

export default ProductPagination;
