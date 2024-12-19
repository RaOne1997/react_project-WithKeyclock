// Generated Service for remoteAccess 


export const listRemoteAccess = () => ({
  type: 'LIST_REMOTEACCESS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/remoteAccess',
      method: 'GET',
    },
  },
});
      

export const addRemoteAccess = (item:any) => ({
  type: 'ADD_REMOTEACCESS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/remoteAccess',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteRemoteAccess = (item:any) => ({
  type: 'DELETE_REMOTEACCESS',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/remoteAccess/permissions'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateRemoteAccess = (item:any) => ({
  type: 'UPDATE_REMOTEACCESS',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/security/remoteAccess/permissions'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      