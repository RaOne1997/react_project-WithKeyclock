// Generated Service for partnerIdpBrokerSettings 


export const listPartnerIdpBrokerSettings = () => ({
  type: 'LIST_PARTNERIDPBROKERSETTINGS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/settings',
      method: 'GET',
    },
  },
});
      

export const addPartnerIdpBrokerSettings = (item:any) => ({
  type: 'ADD_PARTNERIDPBROKERSETTINGS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/settings',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePartnerIdpBrokerSettings = (item:any) => ({
  type: 'DELETE_PARTNERIDPBROKERSETTINGS',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/settings/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updatePartnerIdpBrokerSettings = (item:any) => ({
  type: 'UPDATE_PARTNERIDPBROKERSETTINGS',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/settings/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      