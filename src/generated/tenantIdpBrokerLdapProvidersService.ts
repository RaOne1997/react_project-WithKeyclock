// Generated Service for tenantIdpBrokerLdapProviders 


export const listTenantIdpBrokerLdapProviders = () => ({
  type: 'LIST_TENANTIDPBROKERLDAPPROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/ldapproviders',
      method: 'GET',
    },
  },
});
      

export const addTenantIdpBrokerLdapProviders = (item:any) => ({
  type: 'ADD_TENANTIDPBROKERLDAPPROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/ldapproviders',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteTenantIdpBrokerLdapProviders = (item:any) => ({
  type: 'DELETE_TENANTIDPBROKERLDAPPROVIDERS',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/ldapproviders/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateTenantIdpBrokerLdapProviders = (item:any) => ({
  type: 'UPDATE_TENANTIDPBROKERLDAPPROVIDERS',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/ldapproviders/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      