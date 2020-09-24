
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import Featured from "./src/screens/Featured"; 
import NewIn from "./src/screens/NewIn"; 
import BestSellers from "./src/screens/BestSellers"; 
import CartScreen from "./src/components/Cart"; 
import ProductScreen from "./src/components/Product"; 
import Icon from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';


const Tab = createMaterialTopTabNavigator();
  
  const TestTab = () => {
  return (
  <Tab.Navigator  tabBarOptions={{tabBarIcon: true}}
  initialRouteName="Featured" shifting={true}>
  <Tab.Screen name="Featured" component={Featured} />
  <Tab.Screen name="Best Sellers" component={BestSellers} />
  <Tab.Screen name="New In" component={NewIn} />
  </Tab.Navigator>
  );
  };


const Stack = createStackNavigator();

function App({navigation}) {

  
return (
  <NavigationContainer>
    <Stack.Navigator  
    screenOptions={{
   
    headerRight: () => (
      <View style={styles.header}>
        <TouchableOpacity style= {{marginRight:20}} onPress={() => navigation.navigate("Cart")}>
          <Zocial name="cart" type="Zocial" color="#FF8C00" size={25}/> 
        </TouchableOpacity>

        <TouchableOpacity style= {{marginTop:6}} onPress={() => navigation.navigate("Product")}>
          <Icon name="search" type="FontAwesome" color="#3399FF" size={20}/>
        </TouchableOpacity>
      </View>
    ),
    headerLeft: () => (
      <>
      <TouchableOpacity>
       <Entypo style= {{marginLeft:10}} name="menu" type="Entypo" color="#FF8C00" size={30}/>
      </TouchableOpacity>
  {/* 
      <Picker selectedValue={selectedValue} onValueChange={(itemValue) => {
                          setSelectedValue(itemValue);
                        }}>
        <Picker.Item value="1" label="1" />
        <Picker.Item value="2" label="2" />
        <Picker.Item value="3" label="3" />
      </Picker> */}
  </>
    )}}>
      <Stack.Screen name=" " component={TestTab}/>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    
    </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:10,

  }
});
export default App;