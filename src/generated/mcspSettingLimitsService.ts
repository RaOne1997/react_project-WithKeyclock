// Generated Service for mcspSettingLimits 


export const deleteMcspSettingLimits = (item:any) => ({
  type: 'DELETE_MCSPSETTINGLIMITS',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/mcsp-setting-limits'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listMcspSettingLimits = () => ({
  type: 'LIST_MCSPSETTINGLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/mcsp-setting-limits',
      method: 'GET',
    },
  },
});
      

export const addMcspSettingLimits = (item:any) => ({
  type: 'ADD_MCSPSETTINGLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/mcsp-setting-limits',
      method: 'POST',
      data: item,
    },
  },
});
      

export const updateMcspSettingLimits = (item:any) => ({
  type: 'UPDATE_MCSPSETTINGLIMITS',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/mcsp-setting-limits'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      