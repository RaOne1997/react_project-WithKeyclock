// Generated Service for tenantIdpBrokerSettings 


export const listTenantIdpBrokerSettings = () => ({
  type: 'LIST_TENANTIDPBROKERSETTINGS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/settings',
      method: 'GET',
    },
  },
});
      

export const addTenantIdpBrokerSettings = (item:any) => ({
  type: 'ADD_TENANTIDPBROKERSETTINGS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/settings',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteTenantIdpBrokerSettings = (item:any) => ({
  type: 'DELETE_TENANTIDPBROKERSETTINGS',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/settings/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateTenantIdpBrokerSettings = (item:any) => ({
  type: 'UPDATE_TENANTIDPBROKERSETTINGS',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/settings/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      