// Generated Service for partnerIdpBrokerLocalRole 


export const listPartnerIdpBrokerLocalRole = () => ({
  type: 'LIST_PARTNERIDPBROKERLOCALROLE',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localrole',
      method: 'GET',
    },
  },
});
      

export const addPartnerIdpBrokerLocalRole = (item:any) => ({
  type: 'ADD_PARTNERIDPBROKERLOCALROLE',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localrole',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePartnerIdpBrokerLocalRole = (item:any) => ({
  type: 'DELETE_PARTNERIDPBROKERLOCALROLE',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localrole/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updatePartnerIdpBrokerLocalRole = (item:any) => ({
  type: 'UPDATE_PARTNERIDPBROKERLOCALROLE',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/localrole/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      