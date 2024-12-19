// Generated Service for partnerIdpBrokerSamlv2Providers 


export const listPartnerIdpBrokerSamlv2Providers = () => ({
  type: 'LIST_PARTNERIDPBROKERSAMLV2PROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/samlv2providers',
      method: 'GET',
    },
  },
});
      

export const addPartnerIdpBrokerSamlv2Providers = (item:any) => ({
  type: 'ADD_PARTNERIDPBROKERSAMLV2PROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/samlv2providers',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePartnerIdpBrokerSamlv2Providers = (item:any) => ({
  type: 'DELETE_PARTNERIDPBROKERSAMLV2PROVIDERS',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/samlv2providers/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updatePartnerIdpBrokerSamlv2Providers = (item:any) => ({
  type: 'UPDATE_PARTNERIDPBROKERSAMLV2PROVIDERS',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/samlv2providers/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      