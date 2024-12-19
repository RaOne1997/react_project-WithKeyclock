// Generated Service for sacConnectPolicies 


export const listSacConnectPolicies = () => ({
  type: 'LIST_SACCONNECTPOLICIES',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/connectPolicies',
      method: 'GET',
    },
  },
});
      

export const addSacConnectPolicies = (item:any) => ({
  type: 'ADD_SACCONNECTPOLICIES',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/connectPolicies',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSacConnectPolicies = (item:any) => ({
  type: 'DELETE_SACCONNECTPOLICIES',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/connectPolicies/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSacConnectPolicies = (item:any) => ({
  type: 'UPDATE_SACCONNECTPOLICIES',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/sac/connectPolicies/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      