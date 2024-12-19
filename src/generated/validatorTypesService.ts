// Generated Service for validatorTypes 


export const addValidatorTypes = (item:any) => ({
  type: 'ADD_VALIDATORTYPES',
  payload: {
    request: {
      url: '/v1/global/gfw/gprotect/validator-types',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteValidatorTypes = (item:any) => ({
  type: 'DELETE_VALIDATORTYPES',
  payload: {
    item,
    request: {
      url: `${'/v1/global/gfw/gprotect/validator-types/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listValidatorTypes = () => ({
  type: 'LIST_VALIDATORTYPES',
  payload: {
    request: {
      url: '/v1/global/gfw/gprotect/validator-types/{name}',
      method: 'GET',
    },
  },
});
      

export const updateValidatorTypes = (item:any) => ({
  type: 'UPDATE_VALIDATORTYPES',
  payload: {
    request: {
      url: `${'/v1/global/gfw/gprotect/validator-types/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      