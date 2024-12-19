// Generated Service for site 


export const listSite = () => ({
  type: 'LIST_SITE',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/sites',
      method: 'GET',
    },
  },
});
      

export const addSite = (item:any) => ({
  type: 'ADD_SITE',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/sites',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSite = (item:any) => ({
  type: 'DELETE_SITE',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/sites/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSite = (item:any) => ({
  type: 'UPDATE_SITE',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/sites/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      