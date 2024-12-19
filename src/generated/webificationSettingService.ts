// Generated Service for webificationSetting 


export const listWebificationSetting = () => ({
  type: 'LIST_WEBIFICATIONSETTING',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/entservices/webification/settings',
      method: 'GET',
    },
  },
});
      

export const addWebificationSetting = (item:any) => ({
  type: 'ADD_WEBIFICATIONSETTING',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/entservices/webification/settings',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteWebificationSetting = (item:any) => ({
  type: 'DELETE_WEBIFICATIONSETTING',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/entservices/webification/settings/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateWebificationSetting = (item:any) => ({
  type: 'UPDATE_WEBIFICATIONSETTING',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/entservices/webification/settings/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      