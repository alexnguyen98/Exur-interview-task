import React from 'react';
import CheckFilter from './CheckFilter';
import FreeTextSearch from './FreeTextSearch';

const ProductFilterDesktop: React.FC = () => (
  <nav className="w-2/5 pr-1/10 hidden md:block">
    <FreeTextSearch />
    <div className="pt-8">
      <CheckFilter />
    </div>
  </nav>
);

export default ProductFilterDesktop;
