import { useState } from 'react';
import { DEBOUNCE_DELAY } from '../../constants/debounceDelay';
import { useGetTickets } from '../../hooks/useGetTickets';
import { useDebounce } from '../../hooks/useDebounce';
import { UserType } from '../../constants/userType';

export const useTouristUsersTicketsList = () => {
  const [description, setDescription] = useState('');
  const debouncedDescription = useDebounce(description, DEBOUNCE_DELAY);

  const { isLoading, tickets, fetchNextPage, hasNextPage } = useGetTickets({
    userType: UserType.TOURIST,
    searchDescription: debouncedDescription,
  });

  return {
    isLoading,
    tickets,
    fetchNextPage,
    hasNextPage,
    setDescription,
    description,
  };
};
