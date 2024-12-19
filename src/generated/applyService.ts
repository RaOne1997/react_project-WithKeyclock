// Generated Service for apply 


export const addApply = (item:any) => ({
  type: 'ADD_APPLY',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/apply',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteApply = (item:any) => ({
  type: 'DELETE_APPLY',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/apply/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listApply = () => ({
  type: 'LIST_APPLY',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/apply/permissions',
      method: 'GET',
    },
  },
});
      

export const updateApply = (item:any) => ({
  type: 'UPDATE_APPLY',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/apply/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      