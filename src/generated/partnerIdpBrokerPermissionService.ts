// Generated Service for partnerIdpBrokerPermission 


export const deletePartnerIdpBrokerPermission = (item:any) => ({
  type: 'DELETE_PARTNERIDPBROKERPERMISSION',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listPartnerIdpBrokerPermission = () => ({
  type: 'LIST_PARTNERIDPBROKERPERMISSION',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/permissions',
      method: 'GET',
    },
  },
});
      

export const addPartnerIdpBrokerPermission = (item:any) => ({
  type: 'ADD_PARTNERIDPBROKERPERMISSION',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/permissions',
      method: 'POST',
      data: item,
    },
  },
});
      

export const updatePartnerIdpBrokerPermission = (item:any) => ({
  type: 'UPDATE_PARTNERIDPBROKERPERMISSION',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      