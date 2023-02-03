import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen.view';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen.view';
import TimeScreen from '../screens/TimeScreen/TimeScreen.view';
import Header from '../ui/components/Header/Header.view';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const headerTitle = () => <Header />;

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: headerTitle,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="TimeScreen" component={TimeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
