// Generated Service for annotateText 


export const listAnnotateText = () => ({
  type: 'LIST_ANNOTATETEXT',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/annotate-text-objects',
      method: 'GET',
    },
  },
});
      

export const addAnnotateText = (item:any) => ({
  type: 'ADD_ANNOTATETEXT',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/annotate-text-objects',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteAnnotateText = (item:any) => ({
  type: 'DELETE_ANNOTATETEXT',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/annotate-text-objects/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateAnnotateText = (item:any) => ({
  type: 'UPDATE_ANNOTATETEXT',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/annotate-text-objects/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      