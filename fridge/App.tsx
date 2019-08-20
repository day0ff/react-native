import React from 'react';
import Navigator from './src/navigator/Navigator';

import * as firebase from 'firebase';
import { config } from './src/config';

firebase.initializeApp(config.firebaseConfig);

export default function App() {
  return (<Navigator/>);
}
