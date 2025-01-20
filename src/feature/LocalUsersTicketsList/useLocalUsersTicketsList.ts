import { useState } from 'react';
import { DEBOUNCE_DELAY } from '../../constants/debounceDelay';
import { useGetTickets } from '../../hooks/useGetTickets';
import { UserType } from '../../constants/userType';
import { useDebounce } from '../../hooks/useDebounce';

export const useLocalUsersTicketsList = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const debouncedTitle = useDebounce(title, DEBOUNCE_DELAY);
  const debouncedDescription = useDebounce(description, DEBOUNCE_DELAY);

  const { isLoading, tickets, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetTickets({
      userType: UserType.LOCAL,
      searchDescription: debouncedDescription,
      searchTitle: debouncedTitle,
    });

  const handleDateFormat = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return {
    fetchNextPage,
    hasNextPage,
    tickets,
    isLoading,
    setTitle,
    setDescription,
    title,
    description,
    handleDateFormat,
    isFetchingNextPage,
  };
};
