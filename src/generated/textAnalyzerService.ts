// Generated Service for textAnalyzer 


export const listTextAnalyzer = () => ({
  type: 'LIST_TEXTANALYZER',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/text-analyzer-objects',
      method: 'GET',
    },
  },
});
      

export const addTextAnalyzer = (item:any) => ({
  type: 'ADD_TEXTANALYZER',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/text-analyzer-objects',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteTextAnalyzer = (item:any) => ({
  type: 'DELETE_TEXTANALYZER',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/text-analyzer-objects/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateTextAnalyzer = (item:any) => ({
  type: 'UPDATE_TEXTANALYZER',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/profiles/{profileName}/gprotect/text-analyzer-objects/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      