// Generated Service for subpartner 


export const listSubpartner = () => ({
  type: 'LIST_SUBPARTNER',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners',
      method: 'GET',
    },
  },
});
      

export const addSubpartner = (item:any) => ({
  type: 'ADD_SUBPARTNER',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSubpartner = (item:any) => ({
  type: 'DELETE_SUBPARTNER',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateSubpartner = (item:any) => ({
  type: 'UPDATE_SUBPARTNER',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      