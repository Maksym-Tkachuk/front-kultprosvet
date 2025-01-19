import { useSearchParams } from 'react-router';

export const useEnumSearchParam = <T extends Record<string, string>>(
  paramName: string,
  enumObj: T,
  defaultValue: T[keyof T],
): T[keyof T] => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get(paramName);

  return Object.values(enumObj).includes(param as T[keyof T])
    ? (param as T[keyof T])
    : defaultValue;
};
