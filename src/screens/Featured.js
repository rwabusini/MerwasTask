
import React from 'react';  
import {View,Text} from 'react-native';  

import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//import Featured from "../screens/Featured";  
import BestSellers from "../screens/BestSellers";  
import NewIn from "../screens/NewIn";  

  
  function NewIn1() {
    return ( 
    <NewIn/>     
    );
  }
  
  function BestSellers1() {
    return (   
    <BestSellers/>    
    );
  }

const Tab = createMaterialTopTabNavigator();



function Featured() {
    return (
        <Tab.Navigator>
        <Tab.Screen name="NEW IN" component={NewIn1} />
        <Tab.Screen name="BEST SELLERS" component={BestSellers1} />
      </Tab.Navigator>
    );
  }
export default Featured ;