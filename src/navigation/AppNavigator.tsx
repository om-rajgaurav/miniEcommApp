import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import { RootStackParamList, BottomTabParamList } from '../types/types';
import { colors } from '../theme/colors';
import { useAppSelector } from '../store/store';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

// Home Stack Navigator
const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                    fontWeight: '700',
                },
            }}>
            <Stack.Screen
                name="ProductList"
                component={ProductListScreen}
                options={{ title: 'Products' }}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{ title: 'Product Details' }}
            />
        </Stack.Navigator>
    );
};

// Main Tab Navigator
const AppNavigator = () => {
    const cartItemsCount = useAppSelector(state => state.cart.totalItems);

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontWeight: '700',
                    },
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.textLight,
                    tabBarStyle: {
                        paddingBottom: 5,
                        paddingTop: 5,
                        height: 60,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '600',
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => <TabIcon icon="🏠" />,
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        tabBarIcon: ({ color }) => <TabIcon icon="🛒" />,
                        tabBarBadge: cartItemsCount > 0 ? cartItemsCount : undefined,
                        tabBarBadgeStyle: {
                            backgroundColor: colors.primary,
                            color: colors.white,
                            fontSize: 10,
                            fontWeight: '700',
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

// Simple icon component using emoji
const TabIcon: React.FC<{ icon: string }> = ({ icon }) => {
    return <Text style={{ fontSize: 24 }}>{icon}</Text>;
};

export default AppNavigator;
