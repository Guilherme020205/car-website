import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Dashboard from '../pages/Dashboard';
import { useAuth } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

function AppRoutes() {
    const { signOut } = useAuth();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Dashboard' 
                component={Dashboard} 
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={signOut} style={{ marginRight: 15 }}>
                            <Icon name="logout" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    title: 'Dashboard',
                }}
            />
        </Stack.Navigator>
    );
}

export default AppRoutes;
