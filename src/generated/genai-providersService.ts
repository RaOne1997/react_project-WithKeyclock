// Generated Service for genaiproviders 


export const listGenaiproviders = () => ({
  type: 'LIST_GENAI-PROVIDERS',
  payload: {
    request: {
      url: '/v1/global/gfw/gprotect/genai-providers',
      method: 'GET',
    },
  },
});
      

export const addGenaiproviders = (item:any) => ({
  type: 'ADD_GENAI-PROVIDERS',
  payload: {
    request: {
      url: '/v1/global/gfw/gprotect/genai-providers',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteGenaiproviders = (item:any) => ({
  type: 'DELETE_GENAI-PROVIDERS',
  payload: {
    item,
    request: {
      url: `${'/v1/global/gfw/gprotect/genai-providers/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateGenaiproviders = (item:any) => ({
  type: 'UPDATE_GENAI-PROVIDERS',
  payload: {
    request: {
      url: `${'/v1/global/gfw/gprotect/genai-providers/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      