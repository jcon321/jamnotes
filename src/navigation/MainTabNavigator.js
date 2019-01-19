import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LibraryScreen from '../screens/LibraryScreen';
import RecordScreen from '../screens/RecordScreen';

const LibraryStack = createStackNavigator({
  Library: LibraryScreen,
});

LibraryStack.navigationOptions = {
  tabBarLabel: 'Library',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-folder${focused ? '-open' : ''}`
          : `md-folder${focused ? '' : '-open'}`
      }
    />
  ),
};

const RecordStack = createStackNavigator({
  Records: RecordScreen,
});

RecordStack.navigationOptions = {
  tabBarLabel: 'Record',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
          ? `ios-mic${focused ? '' : ''}`
          : `md-mic${focused ? '' : ''}`
      }
    />
  ),
};

export default createBottomTabNavigator({
    LibraryStack,
    RecordStack,
});
