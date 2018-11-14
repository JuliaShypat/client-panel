// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDYYcurL8z6nu5DDB0nU7tr-m6_E5cecKs',
    authDomain: 'client-panel-prod-51c58.firebaseapp.com',
    databaseURL: 'https://client-panel-prod-51c58.firebaseio.com',
    projectId: 'client-panel-prod-51c58',
    storageBucket: 'client-panel-prod-51c58.appspot.com',
    messagingSenderId: '362058961625'
  }
};
