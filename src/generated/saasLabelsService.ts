// Generated Service for saasLabels 


export const listSaasLabels = () => ({
  type: 'LIST_SAASLABELS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasstore/labels',
      method: 'GET',
    },
  },
});
      

export const addSaasLabels = (item:any) => ({
  type: 'ADD_SAASLABELS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasstore/labels',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSaasLabels = (item:any) => ({
  type: 'DELETE_SAASLABELS',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasstore/labels/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSaasLabels = (item:any) => ({
  type: 'UPDATE_SAASLABELS',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasstore/labels/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      