// Generated Service for saasApplicationDomains 


export const listSaasApplicationDomains = () => ({
  type: 'LIST_SAASAPPLICATIONDOMAINS',
  payload: {
    request: {
      url: '/v1/global/saasstore/domains',
      method: 'GET',
    },
  },
});
      

export const addSaasApplicationDomains = (item:any) => ({
  type: 'ADD_SAASAPPLICATIONDOMAINS',
  payload: {
    request: {
      url: '/v1/global/saasstore/domains',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSaasApplicationDomains = (item:any) => ({
  type: 'DELETE_SAASAPPLICATIONDOMAINS',
  payload: {
    item,
    request: {
      url: `${'/v1/global/saasstore/domains/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSaasApplicationDomains = (item:any) => ({
  type: 'UPDATE_SAASAPPLICATIONDOMAINS',
  payload: {
    request: {
      url: `${'/v1/global/saasstore/domains/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      