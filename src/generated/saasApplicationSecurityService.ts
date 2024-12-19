// Generated Service for saasApplicationSecurity 


export const listSaasApplicationSecurity = () => ({
  type: 'LIST_SAASAPPLICATIONSECURITY',
  payload: {
    request: {
      url: '/v1/global/saasstore/security',
      method: 'GET',
    },
  },
});
      

export const addSaasApplicationSecurity = (item:any) => ({
  type: 'ADD_SAASAPPLICATIONSECURITY',
  payload: {
    request: {
      url: '/v1/global/saasstore/security',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSaasApplicationSecurity = (item:any) => ({
  type: 'DELETE_SAASAPPLICATIONSECURITY',
  payload: {
    item,
    request: {
      url: `${'/v1/global/saasstore/security/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSaasApplicationSecurity = (item:any) => ({
  type: 'UPDATE_SAASAPPLICATIONSECURITY',
  payload: {
    request: {
      url: `${'/v1/global/saasstore/security/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      