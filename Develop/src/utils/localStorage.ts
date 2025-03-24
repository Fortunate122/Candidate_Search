export function getFromLocalStorage<T>(key: string, fallback: T): T {
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : fallback;
    } catch {
      return fallback;
    }
  }
  
  export function setToLocalStorage<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // fail silently
    }
  }
  
  export function removeFromLocalStorage(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      // fail silently
    }
  }  