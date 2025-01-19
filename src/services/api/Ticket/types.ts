import { UserType } from '../../../constants/userType';
import { TicketT } from '../../../types';

export type GetByUserTypeResT = {
  tickets: TicketT[];
  nextCursor: string;
};

export type GetByUserTypeArgsT = {
  userType: UserType;
  cursor?: string | null;
  searchTitle?: string;
  searchDescription?: string;
};
