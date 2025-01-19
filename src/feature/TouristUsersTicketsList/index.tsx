import { useState } from 'react';
import { Search } from '../../components/Search';
import Skeleton from '../../components/Skeleton';
import { UserType } from '../../constants/userType';

import { useGetTickets } from '../hooks/useGetTickets';
import InfinityScroll from '../InfinityScroll';
import { useDebounce } from '../hooks/useDebounce';

export const TouristUsersTicketsList = (): JSX.Element => {
  const [description, setDescription] = useState('');
  const debouncedDescription = useDebounce(description, 400);

  const { isLoading, tickets, fetchNextPage, hasNextPage } = useGetTickets({
    userType: UserType.TOURIST,
    searchDescription: debouncedDescription,
  });

  return (
    <div>
      <div className="sticky z-50 grid grid-cols-2 gap-3 px-6 -mx-6 bg-white top-16">
        <Search
          label="Search By Description"
          onChange={setDescription}
          value={description}
        />
      </div>
      <InfinityScroll
        onNext={fetchNextPage}
        canLoad={!isLoading && hasNextPage}
      >
        <div className="flex flex-col gap-4">
          {isLoading ? (
            <Skeleton count={5} height={106} />
          ) : (
            tickets.map(ticket => (
              <div
                key={ticket.id}
                className="flex items-start gap-4 p-3 transition border rounded-lg shadow-sm cursor-pointer hover:shadow-md"
              >
                <img
                  src={ticket.image}
                  alt={ticket.title}
                  className="object-cover w-20 h-20 rounded"
                />
                <h3 className="text-lg font-semibold">{ticket.description}</h3>
              </div>
            ))
          )}
        </div>
      </InfinityScroll>
    </div>
  );
};
