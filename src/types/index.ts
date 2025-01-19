import { UserType } from '../constants/userType';

export type TicketT = {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  userType: UserType.LOCAL;
  location: string;
};
