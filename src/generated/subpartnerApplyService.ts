// Generated Service for subpartnerApply 


export const addSubpartnerApply = (item:any) => ({
  type: 'ADD_SUBPARTNERAPPLY',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/apply',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteSubpartnerApply = (item:any) => ({
  type: 'DELETE_SUBPARTNERAPPLY',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/apply/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listSubpartnerApply = () => ({
  type: 'LIST_SUBPARTNERAPPLY',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/apply/permissions',
      method: 'GET',
    },
  },
});
      

export const updateSubpartnerApply = (item:any) => ({
  type: 'UPDATE_SUBPARTNERAPPLY',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/apply/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      