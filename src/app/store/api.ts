import {request} from 'react-request-hook';

enum codeUsageType {
    MULTI = "multi-use",
    SINGLE = "single-use",
}

// TODO: consider using a strongly typed Date String - https://spin.atomicobject.com/2017/06/19/strongly-typed-date-string-typescript/
export type Promo = {
    promoPlanId: string;
    promoPlanName: string;
    promoDescription: string;
    tenantId: number;
    promoValidityStartTime: string;
    promoValidityEndTime: string;
    codeCount: number;
    codeUsageType: codeUsageType;
    redemptionLimit: number;
    codePrefix: string;
    codeLength: number;
    createdBy: string;
    createdTimestamp: string;
    approved: boolean;
};

const api = {
  getPromos: (page: number = 1) => {
    return request<Promo[]>({
      method: 'GET',
      url: `/promos?limit=10&page=${page}`,
    });
  },

  searchPromos: (searchText: string) => {
    return request<Promo[]>({
      method: 'GET',
      url: `/promos?filter=${searchText}&limit=10`,
    });
  },
};

export default api;
