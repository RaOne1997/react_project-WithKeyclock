// Generated Service for promptShieldLimits 


export const deletePromptShieldLimits = (item:any) => ({
  type: 'DELETE_PROMPTSHIELDLIMITS',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/prompt-shield-limits'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listPromptShieldLimits = () => ({
  type: 'LIST_PROMPTSHIELDLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/prompt-shield-limits',
      method: 'GET',
    },
  },
});
      

export const addPromptShieldLimits = (item:any) => ({
  type: 'ADD_PROMPTSHIELDLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/prompt-shield-limits',
      method: 'POST',
      data: item,
    },
  },
});
      

export const updatePromptShieldLimits = (item:any) => ({
  type: 'UPDATE_PROMPTSHIELDLIMITS',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/prompt-shield-limits'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      