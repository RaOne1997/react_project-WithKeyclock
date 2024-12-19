// Generated Service for saasApplicationCertifications 


export const listSaasApplicationCertifications = () => ({
  type: 'LIST_SAASAPPLICATIONCERTIFICATIONS',
  payload: {
    request: {
      url: '/v1/global/saasstore/certifications',
      method: 'GET',
    },
  },
});
      

export const addSaasApplicationCertifications = (item:any) => ({
  type: 'ADD_SAASAPPLICATIONCERTIFICATIONS',
  payload: {
    request: {
      url: '/v1/global/saasstore/certifications',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSaasApplicationCertifications = (item:any) => ({
  type: 'DELETE_SAASAPPLICATIONCERTIFICATIONS',
  payload: {
    item,
    request: {
      url: `${'/v1/global/saasstore/certifications/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSaasApplicationCertifications = (item:any) => ({
  type: 'UPDATE_SAASAPPLICATIONCERTIFICATIONS',
  payload: {
    request: {
      url: `${'/v1/global/saasstore/certifications/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      