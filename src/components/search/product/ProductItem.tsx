import React from 'react';
import { SERVER_BASE } from '../../../config';
import { Product } from '../../../types/product';
import Text from '../../common/Text';

type Props = {
  data: Product;
};

const ProductItem: React.FC<Props> = ({ data }) => (
  <div className="hover:scale-105 bg-white">
    <div className="h-44 md:h-52 bg-zinc-100">
      <img
        className="h-full w-full object-cover"
        src={SERVER_BASE + '/picture/' + data.id}
      />
    </div>
    <Text variant="link">{data.name}</Text>
  </div>
);

export default ProductItem;
