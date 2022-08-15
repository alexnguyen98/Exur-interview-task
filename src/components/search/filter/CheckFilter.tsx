import { useRouter } from 'next/router';
import React from 'react';
import { queryToArr } from '../../../utils/query';
import Checkbox from '../../common/Checkbox';
import Text from '../../common/Text';

const complianceTypes = [
  {
    id: '2',
    name: 'Farlige produkter',
  },
  {
    id: '1',
    name: 'Mangelfulde produkter',
  },
];

const CheckFilter: React.FC = () => {
  const router = useRouter();
  const complianceTypeIds = queryToArr(router.query?.complianceTypeIds);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newComplianceTypeIds = e.target.checked
      ? [...complianceTypeIds, e.target.name]
      : complianceTypeIds.filter((i) => i !== e.target.name);

    router.push({
      query: {
        ...router.query,
        complianceTypeIds: newComplianceTypeIds,
      },
    });
  };

  return (
    <div>
      <div>
        <Text variant="big">Filtrer på produkttype</Text>
        <div className="py-4">
          {complianceTypes.map((i) => (
            <Checkbox
              key={i.id}
              name={i.id}
              checked={complianceTypeIds.includes(i.id)}
              onChange={handleCheckbox}
            >
              {i.name}
            </Checkbox>
          ))}
        </div>
      </div>
      <Text variant="big">Filtrer på produktkategori</Text>
    </div>
  );
};

export default CheckFilter;
