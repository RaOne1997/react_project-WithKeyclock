// Generated Service for tenantIdpBrokerLocalRole 


export const listTenantIdpBrokerLocalRole = () => ({
  type: 'LIST_TENANTIDPBROKERLOCALROLE',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localrole',
      method: 'GET',
    },
  },
});
      

export const addTenantIdpBrokerLocalRole = (item:any) => ({
  type: 'ADD_TENANTIDPBROKERLOCALROLE',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localrole',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteTenantIdpBrokerLocalRole = (item:any) => ({
  type: 'DELETE_TENANTIDPBROKERLOCALROLE',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localrole/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateTenantIdpBrokerLocalRole = (item:any) => ({
  type: 'UPDATE_TENANTIDPBROKERLOCALROLE',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/localrole/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      