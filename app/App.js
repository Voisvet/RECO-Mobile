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
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#694fad'},
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
