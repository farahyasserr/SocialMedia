import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen.view';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen.view';
import TimeScreen from '../screens/TimeScreen/TimeScreen.view';
import Header from '../ui/components/Header/Header.view';
import {Image} from 'react-native';
import images from '../assets/images';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const headerTitle = () => <Header />;
  const profileScreenOptions = {
    tabBarIcon: () => <Image source={images.tabIcons.profileIcon} />,
  };
  const homeScreenOptions = {
    tabBarIcon: () => <Image source={images.tabIcons.homeIcon} />,
  };
  const timeScreenOptions = {
    tabBarIcon: () => <Image source={images.tabIcons.timeIcon} />,
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: headerTitle,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={profileScreenOptions}
      />
      <Tab.Screen
        name="TimeScreen"
        component={TimeScreen}
        options={timeScreenOptions}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
