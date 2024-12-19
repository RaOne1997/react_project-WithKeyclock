
import aliasDetailsReducer from './aliasDetailsReducer';
import annotateTextLimitsReducer from './annotateTextLimitsReducer';
import annotateTextReducer from './annotateTextReducer';
import applyReducer from './applyReducer';
import configGroupReducer from './configGroupReducer';
import customSaasMetaRecordReducer from './customSaasMetaRecordReducer';
import defaultTenantRestrictionRecordReducer from './defaultTenantRestrictionRecordReducer';
import gcnpContentCategoriesReducer from './gcnpContentCategoriesReducer';
import gcnpSettingLimitsReducer from './gcnpSettingLimitsReducer';
import gcnpSettingReducer from './gcnpSettingReducer';
import genaiprovidersReducer from './genai-providersReducer';
import genericApplyReducer from './genericApplyReducer';
import idpMediatorRecordReducer from './idpMediatorRecordReducer';
import inspectLimitsReducer from './inspectLimitsReducer';
import inspectReducer from './inspectReducer';
import mcspSettingLimitsReducer from './mcspSettingLimitsReducer';
import mcspSettingReducer from './mcspSettingReducer';
import partnerApplyReducer from './partnerApplyReducer';
import partnerIdpBrokerLdapProvidersReducer from './partnerIdpBrokerLdapProvidersReducer';
import partnerIdpBrokerLocalGroupReducer from './partnerIdpBrokerLocalGroupReducer';
import partnerIdpBrokerLocalRoleReducer from './partnerIdpBrokerLocalRoleReducer';
import partnerIdpBrokerLocalUserReducer from './partnerIdpBrokerLocalUserReducer';
import partnerIdpBrokerOidcProvidersReducer from './partnerIdpBrokerOidcProvidersReducer';
import partnerIdpBrokerPermissionReducer from './partnerIdpBrokerPermissionReducer';
import partnerIdpBrokerSamlv2ProvidersReducer from './partnerIdpBrokerSamlv2ProvidersReducer';
import partnerIdpBrokerSettingsReducer from './partnerIdpBrokerSettingsReducer';
import partnerReducer from './partnerReducer';
import popReducer from './popReducer';
import profileReducer from './profileReducer';
import promptShieldLimitsReducer from './promptShieldLimitsReducer';
import promptShieldReducer from './promptShieldReducer';
import remoteAccessReducer from './remoteAccessReducer';
import saasApplicationCertificationsReducer from './saasApplicationCertificationsReducer';
import saasApplicationCveReducer from './saasApplicationCveReducer';
import saasApplicationDomainsReducer from './saasApplicationDomainsReducer';
import saasApplicationIconReducer from './saasApplicationIconReducer';
import saasApplicationLabelsReducer from './saasApplicationLabelsReducer';
import saasApplicationSecurityReducer from './saasApplicationSecurityReducer';
import saasLabelsReducer from './saasLabelsReducer';
import sacConnectPoliciesReducer from './sacConnectPoliciesReducer';
import sampleReducer from './sampleReducer';
import securityApplyReducer from './securityApplyReducer';
import securityReducer from './securityReducer';
import siteApplyReducer from './siteApplyReducer';
import siteAssociationReducer from './siteAssociationReducer';
import siteGroupApplyReducer from './siteGroupApplyReducer';
import siteGroupReducer from './siteGroupReducer';
import siteReducer from './siteReducer';
import sliceReducer from './sliceReducer';
import subpartnerApplyReducer from './subpartnerApplyReducer';
import subpartnerReducer from './subpartnerReducer';
import tenantIdpBrokerLdapProvidersReducer from './tenantIdpBrokerLdapProvidersReducer';
import tenantIdpBrokerLocalGroupReducer from './tenantIdpBrokerLocalGroupReducer';
import tenantIdpBrokerLocalRoleReducer from './tenantIdpBrokerLocalRoleReducer';
import tenantIdpBrokerLocalUserReducer from './tenantIdpBrokerLocalUserReducer';
import tenantIdpBrokerOidcProvidersReducer from './tenantIdpBrokerOidcProvidersReducer';
import tenantIdpBrokerPermissionReducer from './tenantIdpBrokerPermissionReducer';
import tenantIdpBrokerSamlv2ProvidersReducer from './tenantIdpBrokerSamlv2ProvidersReducer';
import tenantIdpBrokerSettingsReducer from './tenantIdpBrokerSettingsReducer';
import tenantReducer from './tenantReducer';
import tenantRestrictionRecordReducer from './tenantRestrictionRecordReducer';
import textAnalyzerLimitsReducer from './textAnalyzerLimitsReducer';
import textAnalyzerReducer from './textAnalyzerReducer';
import validatorTypesReducer from './validatorTypesReducer';
import webificationServiceReducer from './webificationServiceReducer';
import webificationSettingReducer from './webificationSettingReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  aliasDetailsReducer,
  annotateTextLimitsReducer,
  annotateTextReducer,
  applyReducer,
  configGroupReducer,
  customSaasMetaRecordReducer,
  defaultTenantRestrictionRecordReducer,
  gcnpContentCategoriesReducer,
  gcnpSettingLimitsReducer,
  gcnpSettingReducer,
  genaiprovidersReducer,
  genericApplyReducer,
  idpMediatorRecordReducer,
  inspectLimitsReducer,
  inspectReducer,
  mcspSettingLimitsReducer,
  mcspSettingReducer,
  partnerApplyReducer,
  partnerIdpBrokerLdapProvidersReducer,
  partnerIdpBrokerLocalGroupReducer,
  partnerIdpBrokerLocalRoleReducer,
  partnerIdpBrokerLocalUserReducer,
  partnerIdpBrokerOidcProvidersReducer,
  partnerIdpBrokerPermissionReducer,
  partnerIdpBrokerSamlv2ProvidersReducer,
  partnerIdpBrokerSettingsReducer,
  partnerReducer,
  popReducer,
  profileReducer,
  promptShieldLimitsReducer,
  promptShieldReducer,
  remoteAccessReducer,
  saasApplicationCertificationsReducer,
  saasApplicationCveReducer,
  saasApplicationDomainsReducer,
  saasApplicationIconReducer,
  saasApplicationLabelsReducer,
  saasApplicationSecurityReducer,
  saasLabelsReducer,
  sacConnectPoliciesReducer,
  sampleReducer,
  securityApplyReducer,
  securityReducer,
  siteApplyReducer,
  siteAssociationReducer,
  siteGroupApplyReducer,
  siteGroupReducer,
  siteReducer,
  sliceReducer,
  subpartnerApplyReducer,
  subpartnerReducer,
  tenantIdpBrokerLdapProvidersReducer,
  tenantIdpBrokerLocalGroupReducer,
  tenantIdpBrokerLocalRoleReducer,
  tenantIdpBrokerLocalUserReducer,
  tenantIdpBrokerOidcProvidersReducer,
  tenantIdpBrokerPermissionReducer,
  tenantIdpBrokerSamlv2ProvidersReducer,
  tenantIdpBrokerSettingsReducer,
  tenantReducer,
  tenantRestrictionRecordReducer,
  textAnalyzerLimitsReducer,
  textAnalyzerReducer,
  validatorTypesReducer,
  webificationServiceReducer,
  webificationSettingReducer
});
