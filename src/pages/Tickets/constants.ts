import { UserType } from '../../constants/userType';
import { LocalUsersTicketsList } from '../../feature/LocalUsersTicketsList';
import { TouristUsersTicketsList } from '../../feature/TouristUsersTicketsList';

export const ticketsLists = {
  [UserType.LOCAL]: LocalUsersTicketsList,
  [UserType.TOURIST]: TouristUsersTicketsList,
};
