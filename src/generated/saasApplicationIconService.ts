// Generated Service for saasApplicationIcon 


export const listSaasApplicationIcon = () => ({
  type: 'LIST_SAASAPPLICATIONICON',
  payload: {
    request: {
      url: '/v1/global/saasstore/icon',
      method: 'GET',
    },
  },
});
      

export const addSaasApplicationIcon = (item:any) => ({
  type: 'ADD_SAASAPPLICATIONICON',
  payload: {
    request: {
      url: '/v1/global/saasstore/icon',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSaasApplicationIcon = (item:any) => ({
  type: 'DELETE_SAASAPPLICATIONICON',
  payload: {
    item,
    request: {
      url: `${'/v1/global/saasstore/icon/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSaasApplicationIcon = (item:any) => ({
  type: 'UPDATE_SAASAPPLICATIONICON',
  payload: {
    request: {
      url: `${'/v1/global/saasstore/icon/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      