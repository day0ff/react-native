export interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export const config = {
  firebaseConfig: {
    apiKey: 'AIzaSyDxKVmzS-6zul9EOC98KthsijkqBSDXp-c',
    authDomain: 'day0ff-fridge.firebaseapp.com',
    databaseURL: 'https://day0ff-fridge.firebaseio.com',
    projectId: 'day0ff-fridge',
    storageBucket: '',
    messagingSenderId: '298467520941',
    appId: '1:298467520941:web:c528cd0a9ebece1d',
  },
  OAuthID: {
    android: '298467520941-5gdle4dpsi65hunor42t2t4j3r210jfu.apps.googleusercontent.com',
    ios: null,
  }
};
