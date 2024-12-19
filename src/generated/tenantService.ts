// Generated Service for tenant 


export const listTenant = () => ({
  type: 'LIST_TENANT',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants',
      method: 'GET',
    },
  },
});
      

export const addTenant = (item:any) => ({
  type: 'ADD_TENANT',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteTenant = (item:any) => ({
  type: 'DELETE_TENANT',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateTenant = (item:any) => ({
  type: 'UPDATE_TENANT',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      