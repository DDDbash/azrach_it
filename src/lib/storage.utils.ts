export function setLocalStorage<T>(key: string, value: T): void {
  try {
    const stringified = JSON.stringify(value);
    localStorage.setItem(key, stringified);
  } catch (err) {
    console.error(`Error saving ${key} to localStorage`, err);
  }
}

export function getLocalStorage<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (err) {
    console.error(`Error reading ${key} from localStorage`, err);
    return null;
  }
}
