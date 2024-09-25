import { useQuery } from "@tanstack/react-query";

export const useFetch = (url) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        return data;
      } catch (error) {
        throw new Error(`Error: ${error.message}`);
      }
    },
    staleTime: 600 * 10, //1 minute fresh data
    cacheTime: 3000 * 10, // 5 minutes in cache
    retry: 1, //Retry fetch once on fail
  });

  return { isLoading, error, data };
};