import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Usuarios from '../pages/Usuarios';
import Repositorios from '../pages/Repositorios';
import Repositorio from '../pages/Repositorio';
import Icon from 'react-native-vector-icons/Ionicons';

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
            <Stack.Screen
                name="Usuarios"
                component={Usuarios}
                initialParams={{ delete: '' }}
                options={{ title: "Usuários" }}
            />
            <Stack.Screen
                name="Repositorios"
                component={Repositorios}
                options={{
                    title: "Repositórios",
                    headerBackImage: () => <Icon name="chevron-back" size={20} color="#fff" />
                }}
            />
            <Stack.Screen
                name="Repositorio"
                component={Repositorio}
                options={({ route }) => ({
                    title: route.params.name,
                    headerBackImage: () => <Icon name="chevron-back" size={20} color="#fff" />,
                })}
            />
        </Stack.Navigator>
    )
}

export default Routes;