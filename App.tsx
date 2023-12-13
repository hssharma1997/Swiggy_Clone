import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/Navigator/BottomNavigation';


function App(): React.JSX.Element {
  return ( 
  <NavigationContainer>
  <MyTabs />
</NavigationContainer>
)
}



export default App;
