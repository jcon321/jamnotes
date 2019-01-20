import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LibraryScreenContainer from '../screens/LibraryScreen';
import RecordScreenContainer from '../screens/RecordScreen';

const LibraryStack = createStackNavigator({
  Library: LibraryScreenContainer,
});

LibraryStack.navigationOptions = {
  tabBarLabel: 'Library',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      size={26}
      name={
        Platform.OS === 'ios'
          ? `ios-folder${focused ? '-open' : ''}`
          : `md-folder${focused ? '' : '-open'}`
      }
    />
  ),
};

const RecordStack = createStackNavigator({
  Record: RecordScreenContainer,
});

RecordStack.navigationOptions = {
  tabBarLabel: 'Record',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      size={26}
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
