import React from 'react';
import Navigator from './src/navigator/Navigator';

import * as firebase from 'firebase';
import { config, IFirebaseConfig } from './src/configs/config';

firebase.initializeApp(config.firebaseConfig as IFirebaseConfig);

export default function App() {
  return (<Navigator/>);
}
