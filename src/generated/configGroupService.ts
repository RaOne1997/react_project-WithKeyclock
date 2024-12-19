// Generated Service for configGroup 


export const listConfigGroup = () => ({
  type: 'LIST_CONFIGGROUP',
  payload: {
    request: {
      url: '/v1/configgroup',
      method: 'GET',
    },
  },
});
      

export const addConfigGroup = (item:any) => ({
  type: 'ADD_CONFIGGROUP',
  payload: {
    request: {
      url: '/v1/configgroup',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteConfigGroup = (item:any) => ({
  type: 'DELETE_CONFIGGROUP',
  payload: {
    item,
    request: {
      url: `${'/v1/configgroup/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateConfigGroup = (item:any) => ({
  type: 'UPDATE_CONFIGGROUP',
  payload: {
    request: {
      url: `${'/v1/configgroup/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      