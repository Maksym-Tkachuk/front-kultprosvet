import { useSearchParams } from 'react-router';
import { GridIcon, ListIcon } from '../../components/Icons';
import { SearchParam } from '../../constants/searchParam';
import { UserType } from '../../constants/userType';
import { useEnumSearchParam } from '../../feature/hooks/useEnumSearchParam';

import { ticketsLists } from './constants';

export const Tickets = (): JSX.Element => {
  const userType = useEnumSearchParam(
    SearchParam.USER_TYPE,
    UserType,
    UserType.LOCAL,
  );
  const [, setSearchParams] = useSearchParams();

  const List = ticketsLists[userType];

  const handleChangeUserType = (userType: UserType) => () => {
    setSearchParams({ [SearchParam.USER_TYPE]: userType });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl h-[80vh] px-6 pb-6 bg-white rounded-lg shadow-lg overflow-y-auto">
        <div className="sticky top-0 z-50 flex items-center justify-end gap-1 p-6 -mx-6 bg-white cursor-pointer">
          <GridIcon
            color={userType === UserType.LOCAL ? '#ff0000' : '#000'}
            onClick={handleChangeUserType(UserType.LOCAL)}
          />
          <ListIcon
            color={userType === UserType.TOURIST ? '#ff0000' : '#000'}
            onClick={handleChangeUserType(UserType.TOURIST)}
          />
        </div>
        <List />
      </div>
    </div>
  );
};
