// Generated Service for inspect 


export const listInspect = () => ({
  type: 'LIST_INSPECT',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/inspections',
      method: 'GET',
    },
  },
});
      

export const addInspect = (item:any) => ({
  type: 'ADD_INSPECT',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/inspections',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteInspect = (item:any) => ({
  type: 'DELETE_INSPECT',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/inspections/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateInspect = (item:any) => ({
  type: 'UPDATE_INSPECT',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/inspections/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      