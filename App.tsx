import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/navigation/BottomTab';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

export default App;
