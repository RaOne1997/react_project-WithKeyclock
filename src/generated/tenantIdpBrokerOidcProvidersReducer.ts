
import { AnyAction } from 'redux';
const initialState: any[] = [];
const SUCCESS_SUFFIX = '_SUCCESS';

const tenantIdpBrokerOidcProvidersReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LIST_TENANTIDPBROKEROIDCPROVIDERS' + SUCCESS_SUFFIX:
      return action.payload.data;

    case 'ADD_TENANTIDPBROKEROIDCPROVIDERS' + SUCCESS_SUFFIX:
      return [...state, action.payload.data];

    case 'UPDATE_TENANTIDPBROKEROIDCPROVIDERS' + SUCCESS_SUFFIX:
      return state.map(item => item.id === action.payload.data.id ? action.payload.data : item);

    case 'DELETE_TENANTIDPBROKEROIDCPROVIDERS':
      return state.filter(item => item.id !== action.payload.item.id);

    default:
      return state;
  }
};

export default tenantIdpBrokerOidcProvidersReducer;
  