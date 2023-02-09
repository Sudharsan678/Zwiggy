//importing Libraries
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens import
import { Details } from '../Screens/Details';
import { Settings } from '../Screens/Settings';


export const Drawer = () => {
  const Drawer = createDrawerNavigator();
  //returning the function
  return (
    <Drawer.Navigator>
      {/* Drawer Screens here */}
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

