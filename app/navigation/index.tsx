import React, {useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import {HomeIcon} from '../icons/HomeIcon';
import theme from '../theme';
import {FavoriteIcon} from '../icons/FavoriteIcon';
import {ShoppingCartIcon} from '../icons/ShoppingCartIcon';
import {NotificationsIcon} from '../icons/NotificationsIcon';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainStack = () => (
  <Stack.Navigator initialRouteName="MainFlow">
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MainFlow"
      component={MyTabs}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export const MyTabs = () => {
  const renderHomeIcon = useCallback(
    ({focused}: {focused: boolean}) => (
      <HomeIcon
        width={24}
        height={24}
        fill={focused ? theme.colors.primary : undefined}
      />
    ),
    [],
  );

  const renderFavoriteIcon = useCallback(
    ({focused}: {focused: boolean}) => (
      <FavoriteIcon
        width={24}
        height={24}
        fill={focused ? theme.colors.primary : undefined}
      />
    ),
    [],
  );

  const renderShoppingCartIcon = useCallback(
    ({focused}: {focused: boolean}) => (
      <ShoppingCartIcon
        width={24}
        height={24}
        fill={focused ? theme.colors.primary : undefined}
      />
    ),
    [],
  );

  const renderNotificationsIcon = useCallback(
    ({focused}: {focused: boolean}) => (
      <NotificationsIcon
        width={24}
        height={24}
        fill={focused ? theme.colors.primary : undefined}
      />
    ),
    [],
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderHomeIcon,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderFavoriteIcon,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderShoppingCartIcon,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderNotificationsIcon,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};
