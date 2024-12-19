// Generated Service for sample 


export const listSample = () => ({
  type: 'LIST_SAMPLE',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/samples',
      method: 'GET',
    },
  },
});
      

export const addSample = (item:any) => ({
  type: 'ADD_SAMPLE',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/samples',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSample = (item:any) => ({
  type: 'DELETE_SAMPLE',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/samples/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSample = (item:any) => ({
  type: 'UPDATE_SAMPLE',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/samples/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      