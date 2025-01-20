import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { CacheQueryKey } from '../../constants/cacheQueryKey';
import { UserType } from '../../constants/userType';
import { ticket } from '../../services/api/Ticket';

export const useGetTickets = ({
  userType,
  searchDescription,
  searchTitle,
}: {
  userType: UserType;
  searchTitle?: string;
  searchDescription?: string;
}) => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [
        CacheQueryKey.TICKETS,
        userType,
        searchTitle,
        searchDescription,
      ],
      queryFn: ({ pageParam }: { pageParam: string | null }) =>
        ticket.getByUserType({
          userType,
          cursor: pageParam,
          searchTitle,
          searchDescription,
        }),
      getNextPageParam: lastPage => lastPage.nextCursor || null,
      initialPageParam: null,
    });

  useEffect(() => {
    if (isError) {
      console.error('Error fetching tickets:', error);
    }
  }, [error, isError]);

  const tickets = data?.pages.flatMap(page => page.tickets) || [];

  return {
    isLoading,
    tickets,
    fetchNextPage,
    hasNextPage,
  };
};
