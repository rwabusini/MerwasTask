//import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { useIsFocused } from "@react-navigation/core";
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
  <Tab.Screen name="Featured" component={CartScreen} />
  <Tab.Screen name="Best Sellers" component={BestSellers} />
  <Tab.Screen name="New In" component={NewIn} />
  </Tab.Navigator>
  );
  };





const HomeScreen = ({ navigation }) => {
  
navigation.setOptions({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.replace("Search")}>
     <Icon name="heart" type="FontAwesome" color="#C0C0C0" size={35}
                            onPress={()=> {} } underlayColor={'#64b5f6'}/>
    </TouchableOpacity>
  ),
  headerLeft: () => (
    <>
    
</>
  ),
});

return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>HomeScreen</Text>
    {/* <BestSellers/>  */}
    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
      <Text>"Go To Cart Screen"</Text>
    </TouchableOpacity>
  </View>
);
};




// const CartScreen = ({ navigation }) => {
// return (     
//   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//     <Text style={{}}>CartScreen</Text>
//     <TouchableOpacity onPress={() => navigation.navigate("Product")}>
//       <Text>"Go To Home Screen"</Text>
//     </TouchableOpacity>
//   </View>
  
// );
// };


// const ProductScreen = ({ navigation }) => {
// const isFocused = useIsFocused();
// return (
//     <View style={{ flex: 1}}>
//       <Text style={{ color: isFocused ? "green" : "black" }}>ProductScreen</Text>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>"Go To Home Screen"</Text>
//       </TouchableOpacity>
//     </View>
// );
// };






const Stack = createStackNavigator();

function App() {
  
return (
  <NavigationContainer>
    <Stack.Navigator  
    screenOptions={{
          headerStyle: {
            
            
    },
    headerRight: () => (
      <View style={styles.header}>
        <TouchableOpacity style= {{marginRight:20}} onPress={() => ({CartScreen})}>
          <Zocial name="cart" type="Zocial" color="#FF8C00" size={25}/> 
        </TouchableOpacity>

        <TouchableOpacity style= {{marginTop:6}} onPress={() => navigation.replace("Search")}>
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
      <Stack.Screen name="Home3444" component={TestTab}/>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
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