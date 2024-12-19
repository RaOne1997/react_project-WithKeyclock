// Generated Service for inspectLimits 


export const deleteInspectLimits = (item:any) => ({
  type: 'DELETE_INSPECTLIMITS',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/inspect-limits'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listInspectLimits = () => ({
  type: 'LIST_INSPECTLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/inspect-limits',
      method: 'GET',
    },
  },
});
      

export const addInspectLimits = (item:any) => ({
  type: 'ADD_INSPECTLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/inspect-limits',
      method: 'POST',
      data: item,
    },
  },
});
      

export const updateInspectLimits = (item:any) => ({
  type: 'UPDATE_INSPECTLIMITS',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/inspect-limits'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      