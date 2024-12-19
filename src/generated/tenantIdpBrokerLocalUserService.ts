// Generated Service for tenantIdpBrokerLocalUser 


export const listTenantIdpBrokerLocalUser = () => ({
  type: 'LIST_TENANTIDPBROKERLOCALUSER',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localuser',
      method: 'GET',
    },
  },
});
      

export const addTenantIdpBrokerLocalUser = (item:any) => ({
  type: 'ADD_TENANTIDPBROKERLOCALUSER',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localuser',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteTenantIdpBrokerLocalUser = (item:any) => ({
  type: 'DELETE_TENANTIDPBROKERLOCALUSER',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localuser/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateTenantIdpBrokerLocalUser = (item:any) => ({
  type: 'UPDATE_TENANTIDPBROKERLOCALUSER',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localuser/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      