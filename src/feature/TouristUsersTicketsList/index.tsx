import { Search } from '../../components/Search';
import Skeleton from '../../components/Skeleton';
import InfinityScroll from '../InfinityScroll';
import { useTouristUsersTicketsList } from './useTouristUsersTicketsList';

export const TouristUsersTicketsList = (): JSX.Element => {
  const {
    isLoading,
    tickets,
    fetchNextPage,
    hasNextPage,
    setDescription,
    description,
    isFetchingNextPage,
  } = useTouristUsersTicketsList();
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
        canLoad={!isLoading && hasNextPage && !isFetchingNextPage}
      >
        <div className="flex flex-col gap-4">
          {isLoading ? (
            <Skeleton count={3} height={106} />
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
          {isFetchingNextPage && <Skeleton count={3} height={106} />}
        </div>
      </InfinityScroll>
    </div>
  );
};
