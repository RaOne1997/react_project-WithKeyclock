// Generated Service for pop 


export const listPop = () => ({
  type: 'LIST_POP',
  payload: {
    request: {
      url: '/v1/pops',
      method: 'GET',
    },
  },
});
      

export const addPop = (item:any) => ({
  type: 'ADD_POP',
  payload: {
    request: {
      url: '/v1/pops',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePop = (item:any) => ({
  type: 'DELETE_POP',
  payload: {
    item,
    request: {
      url: `${'/v1/pops/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updatePop = (item:any) => ({
  type: 'UPDATE_POP',
  payload: {
    request: {
      url: `${'/v1/pops/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      