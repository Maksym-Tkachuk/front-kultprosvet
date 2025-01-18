const VITE_API_URL = import.meta.env.VITE_API_URL;

interface FetchOptions extends RequestInit {
  queryParams?: Record<string, string | number>;
}

export const api = async <T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> => {
  const { queryParams, ...fetchOptions } = options;

  const url = new URL(`${VITE_API_URL}${endpoint}`);

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) =>
      url.searchParams.append(key, String(value)),
    );
  }

  if (fetchOptions.body) {
    fetchOptions.body = JSON.stringify(fetchOptions.body);
  }

  const response = await fetch(url.toString(), fetchOptions);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};
