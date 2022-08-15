import React from 'react';
import Checkbox from '../../common/Checkbox';
import Text from '../../common/Text';

const CheckFilter: React.FC = () => (
  <div>
    <div>
      <Text variant="big">Filtrer på produkttype</Text>
      <div className="py-4">
        <Checkbox>Farlige produkter</Checkbox>
        <Checkbox>Mangelfulde produkter</Checkbox>
      </div>
    </div>
    <Text variant="big">Filtrer på produktkategori</Text>
  </div>
);

export default CheckFilter;
