import store from '../store';

// a request helper which reads the access_token from the redux state and passes it in its HTTP request
export default function userDataRequest(url, method = 'GET') {
  const token = store.getState().oidc.user.access_token;

  var url_with_token = url + '?access_token=' + token;
  console.log("url with token: ", url_with_token);

  var request = new Request( url_with_token, {
      method: 'GET'
  });

  return fetch(request)
   .then(function(res) {
    return res.json();
   })
  .then(function(resJson) {
    return resJson;
   })
  .catch((error) => ({ error }));
}
