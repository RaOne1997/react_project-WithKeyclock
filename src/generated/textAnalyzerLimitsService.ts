// Generated Service for textAnalyzerLimits 


export const deleteTextAnalyzerLimits = (item:any) => ({
  type: 'DELETE_TEXTANALYZERLIMITS',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/text-analyzer-limits'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listTextAnalyzerLimits = () => ({
  type: 'LIST_TEXTANALYZERLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/text-analyzer-limits',
      method: 'GET',
    },
  },
});
      

export const addTextAnalyzerLimits = (item:any) => ({
  type: 'ADD_TEXTANALYZERLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/text-analyzer-limits',
      method: 'POST',
      data: item,
    },
  },
});
      

export const updateTextAnalyzerLimits = (item:any) => ({
  type: 'UPDATE_TEXTANALYZERLIMITS',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/text-analyzer-limits'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      