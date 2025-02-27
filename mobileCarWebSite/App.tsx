import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#fff' translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}


