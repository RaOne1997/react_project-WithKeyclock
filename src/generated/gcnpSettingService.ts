// Generated Service for gcnpSetting 


export const listGcnpSetting = () => ({
  type: 'LIST_GCNPSETTING',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/gcnp-setting-objects',
      method: 'GET',
    },
  },
});
      

export const addGcnpSetting = (item:any) => ({
  type: 'ADD_GCNPSETTING',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/gcnp-setting-objects',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteGcnpSetting = (item:any) => ({
  type: 'DELETE_GCNPSETTING',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/gcnp-setting-objects/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateGcnpSetting = (item:any) => ({
  type: 'UPDATE_GCNPSETTING',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/gcnp-setting-objects/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      