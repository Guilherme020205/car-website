import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#1d1d2e' translucent={false} />
      <Routes/>
    </NavigationContainer>
  );
}

 
