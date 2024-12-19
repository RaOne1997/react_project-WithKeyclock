// Generated Service for slice 


export const listSlice = () => ({
  type: 'LIST_SLICE',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices',
      method: 'GET',
    },
  },
});
      

export const addSlice = (item:any) => ({
  type: 'ADD_SLICE',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSlice = (item:any) => ({
  type: 'DELETE_SLICE',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSlice = (item:any) => ({
  type: 'UPDATE_SLICE',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      