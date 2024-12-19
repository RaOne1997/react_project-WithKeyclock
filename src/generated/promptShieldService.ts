// Generated Service for promptShield 


export const listPromptShield = () => ({
  type: 'LIST_PROMPTSHIELD',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/prompt-shield-objects',
      method: 'GET',
    },
  },
});
      

export const addPromptShield = (item:any) => ({
  type: 'ADD_PROMPTSHIELD',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/prompt-shield-objects',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePromptShield = (item:any) => ({
  type: 'DELETE_PROMPTSHIELD',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/prompt-shield-objects/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updatePromptShield = (item:any) => ({
  type: 'UPDATE_PROMPTSHIELD',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/prompt-shield-objects/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      