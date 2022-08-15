import React from 'react';
import Search from '../../icons/Search';

const FreeTextSearch: React.FC = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <button className="bg-blue-700 w-12 flex justify-center items-center">
        <Search className="w-6 fill-current text-white" />
      </button>
      <input
        className="w-full bg-zinc-200 px-5 py-2"
        placeholder="Søg produkter"
      />
    </form>
  );
};

export default FreeTextSearch;
