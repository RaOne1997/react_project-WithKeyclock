// Generated Service for securityApply 


export const addSecurityApply = (item:any) => ({
  type: 'ADD_SECURITYAPPLY',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/apply',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSecurityApply = (item:any) => ({
  type: 'DELETE_SECURITYAPPLY',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/apply/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listSecurityApply = () => ({
  type: 'LIST_SECURITYAPPLY',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/apply/permissions',
      method: 'GET',
    },
  },
});
      

export const updateSecurityApply = (item:any) => ({
  type: 'UPDATE_SECURITYAPPLY',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/apply/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      