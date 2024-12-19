// Generated Service for partnerIdpBrokerOidcProviders 


export const listPartnerIdpBrokerOidcProviders = () => ({
  type: 'LIST_PARTNERIDPBROKEROIDCPROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/oidcproviders',
      method: 'GET',
    },
  },
});
      

export const addPartnerIdpBrokerOidcProviders = (item:any) => ({
  type: 'ADD_PARTNERIDPBROKEROIDCPROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/oidcproviders',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePartnerIdpBrokerOidcProviders = (item:any) => ({
  type: 'DELETE_PARTNERIDPBROKEROIDCPROVIDERS',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/oidcproviders/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updatePartnerIdpBrokerOidcProviders = (item:any) => ({
  type: 'UPDATE_PARTNERIDPBROKEROIDCPROVIDERS',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/oidcproviders/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      