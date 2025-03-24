import { useState, useEffect } from 'react';
import {
  getFromLocalStorage,
  setToLocalStorage,
  // removeFromLocalStorage,
} from '../utils/localStorage';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    return getFromLocalStorage<T>(key, initialValue);
  });

  useEffect(() => {
    setToLocalStorage(key, storedValue);
  }, [key, storedValue]);

  // const removeValue = () => {
  //   removeFromLocalStorage(key);
  //   setStoredValue(initialValue);
  // };

  return [storedValue, setStoredValue]; // , removeValue - if you want to remove the value from local storage, add this
}

export default useLocalStorage;