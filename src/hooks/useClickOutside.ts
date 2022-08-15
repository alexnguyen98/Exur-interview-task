import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      callback();
    };

    if (ref) {
      document.addEventListener('click', handleClickOutside, true);
      return () =>
        document.removeEventListener('click', handleClickOutside, true);
    }
  }, [ref, callback]);
};
