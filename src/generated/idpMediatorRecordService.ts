// Generated Service for idpMediatorRecord 


export const listIdpMediatorRecord = () => ({
  type: 'LIST_IDPMEDIATORRECORD',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/idpMediatorRecords',
      method: 'GET',
    },
  },
});
      

export const addIdpMediatorRecord = (item:any) => ({
  type: 'ADD_IDPMEDIATORRECORD',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/idpMediatorRecords',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteIdpMediatorRecord = (item:any) => ({
  type: 'DELETE_IDPMEDIATORRECORD',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/idpMediatorRecords/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateIdpMediatorRecord = (item:any) => ({
  type: 'UPDATE_IDPMEDIATORRECORD',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/idpMediatorRecords/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      