
import { AnyAction } from 'redux';
const initialState: any[] = [];
const SUCCESS_SUFFIX = '_SUCCESS';

const partnerIdpBrokerOidcProvidersReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LIST_PARTNERIDPBROKEROIDCPROVIDERS' + SUCCESS_SUFFIX:
      return action.payload.data;

    case 'ADD_PARTNERIDPBROKEROIDCPROVIDERS' + SUCCESS_SUFFIX:
      return [...state, action.payload.data];

    case 'UPDATE_PARTNERIDPBROKEROIDCPROVIDERS' + SUCCESS_SUFFIX:
      return state.map(item => item.id === action.payload.data.id ? action.payload.data : item);

    case 'DELETE_PARTNERIDPBROKEROIDCPROVIDERS':
      return state.filter(item => item.id !== action.payload.item.id);

    default:
      return state;
  }
};

export default partnerIdpBrokerOidcProvidersReducer;
  