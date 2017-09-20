# redux-oidc-client

This is a small sample application to demonstrate the usage of [redux-oidc](https://github.com/maxmantz/redux-oidc), which was inspired by the sample provided by author of the redux-oidc framework. Current example implements the react-bootstrap UI features and demonstrates integration with the Spring Security resource using OAuth2 protocol implemented in the redux-oidc-resource project.

An active Google account is necessary to use this sample with the configured Client ID for Web Application. Corresponding "Authorized JavaScript origins" and "Authorized redirect URIs" parameters must be configured. After Google account conviguration, make sure that you have proper settings in the config.production.json file, like that:

{
    "logoutUrl": "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:8080/slo",
    "client_id": "xxxxxxxxxxxxx.apps.googleusercontent.com",
    "response_type": "token id_token",
    "scope": "openid profile",
    "authority": "https://accounts.google.com",
    "automaticSilentRenew": true,
    "filterProtocolClaims": true,
    "loadUserInfo": true,
    "userDataUrl": "http://localhost:9000/userdata",
    "legacyDataUrl": "http://localhost:9000/legacydata"
}


After starting of both redux-oidc-client and redux-oidc-resource projects and further logging in, the app will query the RESTful services of the redux-oidc-resource secured by OAuth2.

Click on `Logout` to log out.

### Technologies
This app uses [react-router-redux](https://github.com/reactjs/react-router-redux) for routing and [redux-saga](https://github.com/yelouafi/redux-saga) to make API requests.

### Running locally
Clone this repo and run `npm install`.
After that run `node server` to start the server. You need to visit [http://localhost:8080](http://localhost:8080) to find the app.

