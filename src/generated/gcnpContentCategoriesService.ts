// Generated Service for gcnpContentCategories 


export const addGcnpContentCategories = (item:any) => ({
  type: 'ADD_GCNPCONTENTCATEGORIES',
  payload: {
    request: {
      url: '/v1/global/gfw/gprotect/gcnp-content-categories',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteGcnpContentCategories = (item:any) => ({
  type: 'DELETE_GCNPCONTENTCATEGORIES',
  payload: {
    item,
    request: {
      url: `${'/v1/global/gfw/gprotect/gcnp-content-categories/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listGcnpContentCategories = () => ({
  type: 'LIST_GCNPCONTENTCATEGORIES',
  payload: {
    request: {
      url: '/v1/global/gfw/gprotect/gcnp-content-categories/{name}',
      method: 'GET',
    },
  },
});
      

export const updateGcnpContentCategories = (item:any) => ({
  type: 'UPDATE_GCNPCONTENTCATEGORIES',
  payload: {
    request: {
      url: `${'/v1/global/gfw/gprotect/gcnp-content-categories/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      