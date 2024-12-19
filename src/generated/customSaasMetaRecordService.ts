// Generated Service for customSaasMetaRecord 


export const listCustomSaasMetaRecord = () => ({
  type: 'LIST_CUSTOMSAASMETARECORD',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasintelligence/customSaasRecords',
      method: 'GET',
    },
  },
});
      

export const addCustomSaasMetaRecord = (item:any) => ({
  type: 'ADD_CUSTOMSAASMETARECORD',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasintelligence/customSaasRecords',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteCustomSaasMetaRecord = (item:any) => ({
  type: 'DELETE_CUSTOMSAASMETARECORD',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasintelligence/customSaasRecords/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateCustomSaasMetaRecord = (item:any) => ({
  type: 'UPDATE_CUSTOMSAASMETARECORD',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasintelligence/customSaasRecords/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      