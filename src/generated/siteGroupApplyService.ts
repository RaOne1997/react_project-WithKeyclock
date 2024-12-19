// Generated Service for siteGroupApply 


export const listSiteGroupApply = () => ({
  type: 'LIST_SITEGROUPAPPLY',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/sitegroups/{siteGroupName}/apply',
      method: 'GET',
    },
  },
});
      

export const addSiteGroupApply = (item:any) => ({
  type: 'ADD_SITEGROUPAPPLY',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/sitegroups/{siteGroupName}/apply',
      method: 'POST',
      data: item,
    },
  },
});
      