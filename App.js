import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountCreate from './src/screens/AccountCreate';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import {Provider as LocationProvider} from './src/context/LocationContext';
const switchNavigator = createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
    loginFlow: createStackNavigator({
      Signup: Signup,
      Signin: Signin
    }),
    mainFlow: createBottomTabNavigator({
          trackListFlow: createStackNavigator({
          TrackList:TrackListScreen,
          TrackDetail:TrackDetailScreen
        }),
        TrackCreate:TrackCreateScreen,
       Account:AccountCreate
    })    
});


const App =  createAppContainer(switchNavigator);


export default () =>{
  return(
    <LocationProvider>
    <AuthProvider>
      <App
       ref={(navigator) => {
         setNavigator(navigator);
         }}
         />
    </AuthProvider>
    </LocationProvider>
  );
}