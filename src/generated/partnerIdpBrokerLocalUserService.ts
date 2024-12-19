// Generated Service for partnerIdpBrokerLocalUser 


export const listPartnerIdpBrokerLocalUser = () => ({
  type: 'LIST_PARTNERIDPBROKERLOCALUSER',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localuser',
      method: 'GET',
    },
  },
});
      

export const addPartnerIdpBrokerLocalUser = (item:any) => ({
  type: 'ADD_PARTNERIDPBROKERLOCALUSER',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localuser',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePartnerIdpBrokerLocalUser = (item:any) => ({
  type: 'DELETE_PARTNERIDPBROKERLOCALUSER',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localuser/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updatePartnerIdpBrokerLocalUser = (item:any) => ({
  type: 'UPDATE_PARTNERIDPBROKERLOCALUSER',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localuser/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      