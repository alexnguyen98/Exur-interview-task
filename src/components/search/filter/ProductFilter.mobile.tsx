import React, { useRef, useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import CheckFilter from './CheckFilter';
import FreeTextSearch from './FreeTextSearch';

const ProductFilterMobile: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);

  const handleOpenModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  useClickOutside(ref, handleCloseModal);

  return (
    <div className="flex md:hidden flex-col">
      <FreeTextSearch />
      <button
        className="mt-2 ml-auto font-bold text-blue-700"
        onClick={handleOpenModal}
      >
        Filtrer din søgning
      </button>
      {modalOpen && (
        <div className="flex flex-col bg-black bg-opacity-50 top-0 right-0 left-0 bottom-0 z-10 fixed">
          <div className="bg-white mt-auto px-4 py-10" ref={ref}>
            <CheckFilter />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilterMobile;
