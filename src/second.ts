export function name<T>(name: T): number;
export function name<T>(name: T): string;
export function name<T>(name: T): string[];
export function name (name: string | number | string[]) {
  if (typeof name === 'string') {
    return name + String(1)
  }
  if (typeof name === 'number') {
    return name + 1
  }
  if (typeof name === 'object') {
    return name.map(item => item + 1);
  }
}