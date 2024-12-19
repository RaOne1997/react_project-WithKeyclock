// Generated Service for siteAssociation 


export const listSiteAssociation = () => ({
  type: 'LIST_SITEASSOCIATION',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/sitegroups/{siteGroupName}/siteassociations',
      method: 'GET',
    },
  },
});
      

export const addSiteAssociation = (item:any) => ({
  type: 'ADD_SITEASSOCIATION',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/sitegroups/{siteGroupName}/siteassociations',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSiteAssociation = (item:any) => ({
  type: 'DELETE_SITEASSOCIATION',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/sitegroups/{siteGroupName}/siteassociations/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSiteAssociation = (item:any) => ({
  type: 'UPDATE_SITEASSOCIATION',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/sitegroups/{siteGroupName}/siteassociations/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      