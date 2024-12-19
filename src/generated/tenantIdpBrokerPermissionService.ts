// Generated Service for tenantIdpBrokerPermission 


export const deleteTenantIdpBrokerPermission = (item:any) => ({
  type: 'DELETE_TENANTIDPBROKERPERMISSION',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listTenantIdpBrokerPermission = () => ({
  type: 'LIST_TENANTIDPBROKERPERMISSION',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/permissions',
      method: 'GET',
    },
  },
});
      

export const addTenantIdpBrokerPermission = (item:any) => ({
  type: 'ADD_TENANTIDPBROKERPERMISSION',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/permissions',
      method: 'POST',
      data: item,
    },
  },
});
      

export const updateTenantIdpBrokerPermission = (item:any) => ({
  type: 'UPDATE_TENANTIDPBROKERPERMISSION',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      