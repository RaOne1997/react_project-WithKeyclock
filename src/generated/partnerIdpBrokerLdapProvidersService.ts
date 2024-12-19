// Generated Service for partnerIdpBrokerLdapProviders 


export const listPartnerIdpBrokerLdapProviders = () => ({
  type: 'LIST_PARTNERIDPBROKERLDAPPROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/ldapproviders',
      method: 'GET',
    },
  },
});
      

export const addPartnerIdpBrokerLdapProviders = (item:any) => ({
  type: 'ADD_PARTNERIDPBROKERLDAPPROVIDERS',
  payload: {
    request: {
      url: '/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/ldapproviders',
      method: 'POST',
      data: item,
    },
  },
});
      

export const deletePartnerIdpBrokerLdapProviders = (item:any) => ({
  type: 'DELETE_PARTNERIDPBROKERLDAPPROVIDERS',
  payload: {
    item,
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/ldapproviders/{name}'}/${item.id}`,
      method: 'DELETE',
    },
  },
});
      

export const updatePartnerIdpBrokerLdapProviders = (item:any) => ({
  type: 'UPDATE_PARTNERIDPBROKERLDAPPROVIDERS',
  payload: {
    request: {
      url: `${'/v1/partners/{partnerName}/subpartners/{subpartnerName}/idpbroker/ldapproviders/{name}'}/${item.id}`,
      method: 'PUT',
      data: item,
    },
  },
});
      