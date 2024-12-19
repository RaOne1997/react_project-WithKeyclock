// Generated Service for tenantIdpBrokerLocalGroup 


export const listTenantIdpBrokerLocalGroup = () => ({
  type: 'LIST_TENANTIDPBROKERLOCALGROUP',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localgroup',
      method: 'GET',
    },
  },
});
      

export const addTenantIdpBrokerLocalGroup = (item:any) => ({
  type: 'ADD_TENANTIDPBROKERLOCALGROUP',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localgroup',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteTenantIdpBrokerLocalGroup = (item:any) => ({
  type: 'DELETE_TENANTIDPBROKERLOCALGROUP',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localgroup/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateTenantIdpBrokerLocalGroup = (item:any) => ({
  type: 'UPDATE_TENANTIDPBROKERLOCALGROUP',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localgroup/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      