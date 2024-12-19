// Generated Service for siteGroup 


export const listSiteGroup = () => ({
  type: 'LIST_SITEGROUP',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/sitegroups',
      method: 'GET',
    },
  },
});
      

export const addSiteGroup = (item:any) => ({
  type: 'ADD_SITEGROUP',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/sitegroups',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSiteGroup = (item:any) => ({
  type: 'DELETE_SITEGROUP',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/sitegroups/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSiteGroup = (item:any) => ({
  type: 'UPDATE_SITEGROUP',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/sitegroups/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      