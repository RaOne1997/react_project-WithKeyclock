// Generated Service for tenantIdpBrokerSamlv2Providers 


export const listTenantIdpBrokerSamlv2Providers = () => ({
  type: 'LIST_TENANTIDPBROKERSAMLV2PROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/samlv2providers',
      method: 'GET',
    },
  },
});
      

export const addTenantIdpBrokerSamlv2Providers = (item:any) => ({
  type: 'ADD_TENANTIDPBROKERSAMLV2PROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/samlv2providers',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deleteTenantIdpBrokerSamlv2Providers = (item:any) => ({
  type: 'DELETE_TENANTIDPBROKERSAMLV2PROVIDERS',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/samlv2providers/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updateTenantIdpBrokerSamlv2Providers = (item:any) => ({
  type: 'UPDATE_TENANTIDPBROKERSAMLV2PROVIDERS',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/tenants/{tenantName}/slices/{sliceName}/idpbroker/samlv2providers/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      