// Generated Service for security 


export const deleteSecurity = (item:any) => ({
  type: 'DELETE_SECURITY',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listSecurity = () => ({
  type: 'LIST_SECURITY',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/permissions',
      method: 'GET',
    },
  },
});
      

export const addSecurity = (item:any) => ({
  type: 'ADD_SECURITY',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/permissions',
      method: 'POST',
      data: item,
    },
  },
});
      

export const updateSecurity = (item:any) => ({
  type: 'UPDATE_SECURITY',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      