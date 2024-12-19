// Generated Service for mcspSetting 


export const listMcspSetting = () => ({
  type: 'LIST_MCSPSETTING',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/mcsp-setting-objects',
      method: 'GET',
    },
  },
});
      

export const addMcspSetting = (item:any) => ({
  type: 'ADD_MCSPSETTING',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/mcsp-setting-objects',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteMcspSetting = (item:any) => ({
  type: 'DELETE_MCSPSETTING',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/mcsp-setting-objects/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateMcspSetting = (item:any) => ({
  type: 'UPDATE_MCSPSETTING',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/mcsp-setting-objects/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      