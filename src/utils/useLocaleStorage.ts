import { useState } from 'react';
import { Product } from '../types/Product';

export const useLocalStorage = (key: string, initialValue: Product[]) => {
  const valueFromStorage = localStorage.getItem(key) || '[]';

  const [value, setValue] = useState(
    valueFromStorage ? JSON.parse(valueFromStorage) : initialValue,
  );

  return [value, setValue];
};
