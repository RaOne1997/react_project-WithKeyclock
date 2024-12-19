// Generated Service for webificationService 


export const listWebificationService = () => ({
  type: 'LIST_WEBIFICATIONSERVICE',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/entservices/webification/services',
      method: 'GET',
    },
  },
});
      

export const addWebificationService = (item:any) => ({
  type: 'ADD_WEBIFICATIONSERVICE',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/entservices/webification/services',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteWebificationService = (item:any) => ({
  type: 'DELETE_WEBIFICATIONSERVICE',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/entservices/webification/services/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateWebificationService = (item:any) => ({
  type: 'UPDATE_WEBIFICATIONSERVICE',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/entservices/webification/services/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      