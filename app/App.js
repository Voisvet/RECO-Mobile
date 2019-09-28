/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import AccountScreen from './account';
import InfoScreen from './info';
import MapScreen from './map';

const bottomNavigation = createMaterialBottomTabNavigator(
  {
    InfoScreen,
    MapScreen,
    AccountScreen,
  },
  {
    initialRouteName: 'MapScreen',
    activeColor: '#00DC7D',
    inactiveColor: '#666666',
    barStyle: {backgroundColor: '#ffffff'},
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: bottomNavigation,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
