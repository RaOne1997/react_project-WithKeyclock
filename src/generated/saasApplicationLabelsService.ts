// Generated Service for saasApplicationLabels 


export const listSaasApplicationLabels = () => ({
  type: 'LIST_SAASAPPLICATIONLABELS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasstore/applicationlabels',
      method: 'GET',
    },
  },
});
      

export const addSaasApplicationLabels = (item:any) => ({
  type: 'ADD_SAASAPPLICATIONLABELS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasstore/applicationlabels',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSaasApplicationLabels = (item:any) => ({
  type: 'DELETE_SAASAPPLICATIONLABELS',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasstore/applicationlabels/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSaasApplicationLabels = (item:any) => ({
  type: 'UPDATE_SAASAPPLICATIONLABELS',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/saasstore/applicationlabels/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      