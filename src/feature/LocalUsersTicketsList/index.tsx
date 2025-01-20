import { Search } from '../../components/Search';
import InfinityScroll from '../InfinityScroll';
import Skeleton from '../../components/Skeleton';
import { useLocalUsersTicketsList } from './useLocalUsersTicketsList';

export const LocalUsersTicketsList = (): JSX.Element => {
  const {
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
  } = useLocalUsersTicketsList();

  return (
    <div>
      <div className="sticky z-50 grid grid-cols-2 gap-3 px-6 -mx-6 bg-white top-16">
        <Search label="Search By Title" onChange={setTitle} value={title} />
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
        <div className="grid grid-cols-3 gap-6">
          {isLoading ? (
            <Skeleton count={3} height={290} />
          ) : (
            tickets.map(ticket => (
              <div
                key={ticket.id}
                className="p-3 transition duration-200 transform bg-white border shadow-md cursor-pointer rounded-xl hover:shadow-lg hover:scale-105"
              >
                <img
                  src={ticket.image}
                  alt="Ticket"
                  className="object-cover w-full h-40 mb-4 rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{ticket.title}</h3>
                  <p className="text-sm text-gray-600">
                    {handleDateFormat(ticket.date)}
                  </p>
                  <p className="text-sm">{ticket.description}</p>
                  <p className="text-sm text-gray-500">{ticket.location}</p>
                </div>
              </div>
            ))
          )}
          {isFetchingNextPage && <Skeleton count={3} height={290} />}
        </div>
      </InfinityScroll>
    </div>
  );
};
