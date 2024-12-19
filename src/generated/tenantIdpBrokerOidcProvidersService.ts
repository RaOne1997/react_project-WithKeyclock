// Generated Service for tenantIdpBrokerOidcProviders 


export const listTenantIdpBrokerOidcProviders = () => ({
  type: 'LIST_TENANTIDPBROKEROIDCPROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/oidcproviders',
      method: 'GET',
    },
  },
});
      

export const addTenantIdpBrokerOidcProviders = (item:any) => ({
  type: 'ADD_TENANTIDPBROKEROIDCPROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/oidcproviders',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteTenantIdpBrokerOidcProviders = (item:any) => ({
  type: 'DELETE_TENANTIDPBROKEROIDCPROVIDERS',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/oidcproviders/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateTenantIdpBrokerOidcProviders = (item:any) => ({
  type: 'UPDATE_TENANTIDPBROKEROIDCPROVIDERS',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/oidcproviders/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      