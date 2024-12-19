// Generated Service for partnerIdpBrokerLocalGroup 


export const listPartnerIdpBrokerLocalGroup = () => ({
  type: 'LIST_PARTNERIDPBROKERLOCALGROUP',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localgroup',
      method: 'GET',
    },
  },
});
      

export const addPartnerIdpBrokerLocalGroup = (item:any) => ({
  type: 'ADD_PARTNERIDPBROKERLOCALGROUP',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localgroup',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePartnerIdpBrokerLocalGroup = (item:any) => ({
  type: 'DELETE_PARTNERIDPBROKERLOCALGROUP',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localgroup/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updatePartnerIdpBrokerLocalGroup = (item:any) => ({
  type: 'UPDATE_PARTNERIDPBROKERLOCALGROUP',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localgroup/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      