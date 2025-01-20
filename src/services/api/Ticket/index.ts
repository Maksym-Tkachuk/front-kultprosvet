import { api } from '../../../config/api';

import { fetchEndpoints } from '../constants/fetchEndpoints';

import { GetByUserTypeArgsT, GetByUserTypeResT } from './types';

class Ticket {
  async getByUserType({
    cursor,
    userType,
    searchDescription,
    searchTitle,
  }: GetByUserTypeArgsT): Promise<GetByUserTypeResT> {
    let queryParams: Record<string, string> = { userType };

    if (cursor) {
      queryParams.cursor = cursor;
    }
    if (searchDescription) {
      queryParams.searchDescription = searchDescription;
    }
    if (searchTitle) {
      queryParams.searchTitle = searchTitle;
    }

    return api(fetchEndpoints.TICKETS, {
      queryParams,
    });
  }
}

export const ticket = new Ticket();
