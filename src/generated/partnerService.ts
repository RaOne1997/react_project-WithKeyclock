// Generated Service for partner 


export const listPartner = () => ({
  type: 'LIST_PARTNER',
  payload: {
    request: {
      url: '/v1/partners',
      method: 'GET',
    },
  },
});
      

export const addPartner = (item:any) => ({
  type: 'ADD_PARTNER',
  payload: {
    request: {
      url: '/v1/partners',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePartner = (item:any) => ({
  type: 'DELETE_PARTNER',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updatePartner = (item:any) => ({
  type: 'UPDATE_PARTNER',
  payload: {
    request: {
      url: `${'/v1/partners/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      