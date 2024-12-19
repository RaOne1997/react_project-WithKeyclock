// Generated Service for siteApply 


export const listSiteApply = () => ({
  type: 'LIST_SITEAPPLY',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/security/sites/{siteName}/apply',
      method: 'GET',
    },
  },
});
      

export const addSiteApply = (item:any) => ({
  type: 'ADD_SITEAPPLY',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/security/sites/{siteName}/apply',
      method: 'POST',
      data: item,
    },
  },
});
      