import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Usuarios from '../pages/Usuarios';
import Repositorios from '../pages/Repositorios';
import Repositorio from '../pages/Repositorio';
import { Icon } from 'react-native-vector-icons/Icon';

export type RootStackParamList = {
    Usuarios: { delete?: string };
    Repositorios: { user: string };
    Repositorio: {
        name: string,
        description: string,
        language: string,
        img: string,
        username: string,
        html_url: string
    }
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#042A2B' },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="Usuarios" component={Usuarios} initialParams={{ delete: '' }} />
            <Stack.Screen name="Repositorios" component={Repositorios} options={{ title: "Repositórios" }} />
            <Stack.Screen
                name="Repositorio"
                component={Repositorio}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default Routes;