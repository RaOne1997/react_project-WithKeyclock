// Generated Service for partnerApply 


export const addPartnerApply = (item:any) => ({
  type: 'ADD_PARTNERAPPLY',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/apply',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePartnerApply = (item:any) => ({
  type: 'DELETE_PARTNERAPPLY',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/apply/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listPartnerApply = () => ({
  type: 'LIST_PARTNERAPPLY',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/apply/permissions',
      method: 'GET',
    },
  },
});
      

export const updatePartnerApply = (item:any) => ({
  type: 'UPDATE_PARTNERAPPLY',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/apply/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      