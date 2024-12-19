// Generated Service for annotateTextLimits 


export const deleteAnnotateTextLimits = (item:any) => ({
  type: 'DELETE_ANNOTATETEXTLIMITS',
  payload: {
    item,
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/annotate-text-limits'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const listAnnotateTextLimits = () => ({
  type: 'LIST_ANNOTATETEXTLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/annotate-text-limits',
      method: 'GET',
    },
  },
});
      

export const addAnnotateTextLimits = (item:any) => ({
  type: 'ADD_ANNOTATETEXTLIMITS',
  payload: {
    request: {
      url: '/v1/tenantSlices/{tenantSliceName}/gfw/annotate-text-limits',
      method: 'POST',
      data: item,
    },
  },
});
      

export const updateAnnotateTextLimits = (item:any) => ({
  type: 'UPDATE_ANNOTATETEXTLIMITS',
  payload: {
    request: {
      url: `${'/v1/tenantSlices/{tenantSliceName}/gfw/annotate-text-limits'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      