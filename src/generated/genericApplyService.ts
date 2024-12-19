// Generated Service for genericApply 


export const addGenericApply = (item:any) => ({
  type: 'ADD_GENERICAPPLY',
  payload: {
    request: {
      url: '/v1/generic/apply',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteGenericApply = (item:any) => ({
  type: 'DELETE_GENERICAPPLY',
  payload: {
    item,
    request: {
      url: `${'/v1/generic/apply/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listGenericApply = () => ({
  type: 'LIST_GENERICAPPLY',
  payload: {
    request: {
      url: '/v1/generic/apply/permissions',
      method: 'GET',
    },
  },
});
      

export const updateGenericApply = (item:any) => ({
  type: 'UPDATE_GENERICAPPLY',
  payload: {
    request: {
      url: `${'/v1/generic/apply/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      