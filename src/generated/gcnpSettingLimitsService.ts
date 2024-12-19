// Generated Service for gcnpSettingLimits 


export const deleteGcnpSettingLimits = (item:any) => ({
  type: 'DELETE_GCNPSETTINGLIMITS',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/gcnp-setting-limits'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listGcnpSettingLimits = () => ({
  type: 'LIST_GCNPSETTINGLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/gcnp-setting-limits',
      method: 'GET',
    },
  },
});
      

export const addGcnpSettingLimits = (item:any) => ({
  type: 'ADD_GCNPSETTINGLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/gcnp-setting-limits',
      method: 'POST',
      data: item,
    },
  },
});
      

export const updateGcnpSettingLimits = (item:any) => ({
  type: 'UPDATE_GCNPSETTINGLIMITS',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/gcnp-setting-limits'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      