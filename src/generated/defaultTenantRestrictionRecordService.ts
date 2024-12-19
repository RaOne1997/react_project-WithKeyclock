// Generated Service for defaultTenantRestrictionRecord 


export const listDefaultTenantRestrictionRecord = () => ({
  type: 'LIST_DEFAULTTENANTRESTRICTIONRECORD',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/defaultHeaderControls',
      method: 'GET',
    },
  },
});
      

export const addDefaultTenantRestrictionRecord = (item:any) => ({
  type: 'ADD_DEFAULTTENANTRESTRICTIONRECORD',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/defaultHeaderControls',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteDefaultTenantRestrictionRecord = (item:any) => ({
  type: 'DELETE_DEFAULTTENANTRESTRICTIONRECORD',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/defaultHeaderControls/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateDefaultTenantRestrictionRecord = (item:any) => ({
  type: 'UPDATE_DEFAULTTENANTRESTRICTIONRECORD',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/defaultHeaderControls/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      