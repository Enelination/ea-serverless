// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '6u9y5a8zfk'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-mm7em7p4fftiw002.us.auth0.com', // Auth0 domain
  clientId: 'QR4yVKvr2OSmLvaikdOwb18daaHTAhiq', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
