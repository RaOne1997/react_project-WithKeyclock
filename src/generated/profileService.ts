// Generated Service for profile 


export const listProfile = () => ({
  type: 'LIST_PROFILE',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles',
      method: 'GET',
    },
  },
});
      

export const addProfile = (item:any) => ({
  type: 'ADD_PROFILE',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteProfile = (item:any) => ({
  type: 'DELETE_PROFILE',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateProfile = (item:any) => ({
  type: 'UPDATE_PROFILE',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      