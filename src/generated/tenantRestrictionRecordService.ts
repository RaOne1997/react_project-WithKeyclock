// Generated Service for tenantRestrictionRecord 


export const listTenantRestrictionRecord = () => ({
  type: 'LIST_TENANTRESTRICTIONRECORD',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/headerControls',
      method: 'GET',
    },
  },
});
      

export const addTenantRestrictionRecord = (item:any) => ({
  type: 'ADD_TENANTRESTRICTIONRECORD',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/headerControls',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteTenantRestrictionRecord = (item:any) => ({
  type: 'DELETE_TENANTRESTRICTIONRECORD',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/headerControls/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateTenantRestrictionRecord = (item:any) => ({
  type: 'UPDATE_TENANTRESTRICTIONRECORD',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/headerControls/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      