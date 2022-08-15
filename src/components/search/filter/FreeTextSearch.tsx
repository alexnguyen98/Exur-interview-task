import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Search from '../../icons/Search';

const FreeTextSearch: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    router.push({
      query: {
        ...router.query,
        search: searchInput,
      },
    });
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <button className="bg-blue-700 w-12 flex justify-center items-center">
        <Search className="w-6 fill-current text-white" />
      </button>
      <input
        className="w-full bg-zinc-200 px-5 py-2"
        placeholder="Søg produkter"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};

export default FreeTextSearch;
