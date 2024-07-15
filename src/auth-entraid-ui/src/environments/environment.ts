export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: 'ENTER_CLIENT_ID',
      authority: 'ENTER_AUTHORITY'
    }
  },
  graphApiConfig: {
    scopes: ['ENTER_SCOPE'],
    uri: 'ENTER_URI'
  },
  appApiConfig: {
    scopes: [],
    uri: 'ENTER_URI'
  }
};
