// Generated Service for saasApplicationCve 


export const listSaasApplicationCve = () => ({
  type: 'LIST_SAASAPPLICATIONCVE',
  payload: {
    request: {
      url: '/v1/global/saasstore/cve',
      method: 'GET',
    },
  },
});
      

export const addSaasApplicationCve = (item:any) => ({
  type: 'ADD_SAASAPPLICATIONCVE',
  payload: {
    request: {
      url: '/v1/global/saasstore/cve',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSaasApplicationCve = (item:any) => ({
  type: 'DELETE_SAASAPPLICATIONCVE',
  payload: {
    item,
    request: {
      url: `${'/v1/global/saasstore/cve/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSaasApplicationCve = (item:any) => ({
  type: 'UPDATE_SAASAPPLICATIONCVE',
  payload: {
    request: {
      url: `${'/v1/global/saasstore/cve/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      