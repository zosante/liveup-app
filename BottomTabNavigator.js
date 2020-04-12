import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from './Symptoms';
import ScreenTwo from './AddSymptom';

const BottomTabNavigator = createBottomTabNavigator({
  One: ScreenOne,
  Two: ScreenTwo
}, {
  tabBarOptions: {
    showLabel: false
  }
});

export default BottomTabNavigator;