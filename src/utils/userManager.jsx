import { createUserManager } from 'redux-oidc';
import configuration from 'configuration';


const userManagerConfig = {
  client_id: configuration.client_id,
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: configuration.response_type,
  scope: configuration.scope,
  authority: configuration.authority,
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  automaticSilentRenew: configuration.automaticSilentRenew,
  filterProtocolClaims: configuration.filterProtocolClaims,
  loadUserInfo: configuration.loadUserInfo
};

//userManagerConfig.client_id = configuration.client_id;

/*
  
const userManagerConfig = {
		  client_id: 'myClientID',
		  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
		  response_type: 'token id_token',
		  scope: 'openid profile email phone address',
		  authority: 'https://openamxe.example.org:443/openam/oauth2',
		  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
		  automaticSilentRenew: true,
		  filterProtocolClaims: true,
		  loadUserInfo: false,
		};
*/
const userManager = createUserManager(userManagerConfig);

export default userManager;
