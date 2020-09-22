//import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/core";
import { createStackNavigator } from "@react-navigation/stack";
import Featured from "./src/screens/Featured"; 
import NewIn from "./src/screens/NewIn"; 
import BestSellers from "./src/screens/BestSellers"; 
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'; 
import Flag from 'react-native-flags';
import { CustomPicker } from 'react-native-custom-picker'
import { SafeAreaView } from "react-native-safe-area-context";
import Picker from "@react-native-community/picker";





  
  const TestTab = () => {
  return (
  <Tab.Navigator initialRouteName="Featured" shifting={true}>
    <Tab.Screen name="Featured" component={Featured} />
  <Tab.Screen name="Best Sellers" component={BestSellers} />
  <Tab.Screen name="New In" component={NewIn} />
  </Tab.Navigator>
  );
  };





const HomeScreen = ({ navigation }) => {
  
navigation.setOptions({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.replace("Search")}>
      <Text>Search</Text>
    </TouchableOpacity>
  ),
  headerLeft: () => (
    <>
    <TouchableOpacity onPress={() => navigation.replace("Search")}>
     <Text>Search</Text>
    </TouchableOpacity>
    
</>
  ),
});

return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>HomeScreen</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
      <Text>"Go To Cart Screen"</Text>
    </TouchableOpacity>
  </View>
);
};


const Tab = createMaterialTopTabNavigator();

const CartScreen = ({ navigation }) => {
return (     
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{}}>CartScreen</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Product")}>
      <Text>"Go To Home Screen"</Text>
    </TouchableOpacity>
  </View>
  
);
};


const ProductScreen = ({ navigation }) => {
const isFocused = useIsFocused();
return (
    <View style={{ flex: 1}}>
      <Text style={{ color: isFocused ? "green" : "black" }}>ProductScreen</Text>
      <BestSellers/> 
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>"Go To Home Screen"</Text>
      </TouchableOpacity>
    </View>
);
};






const Stack = createStackNavigator();

function App() {
  const [selectedValue, setSelectedValue] = useState("2");
return (
  <NavigationContainer>
    <Stack.Navigator  
    screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
            
    },
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.replace("Search")}>
        <Text>Search</Text>
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <>
      <TouchableOpacity onPress={() => navigation.replace("Search")}>
      <Text>Search</Text>
      </TouchableOpacity>
{/* 
    <Picker selectedValue={selectedValue} onValueChange={(itemValue) => {
                        setSelectedValue(itemValue);
                      }}>
      <Picker.Item value="1" label="1" />
      <Picker.Item value="2" label="2" />
      <Picker.Item value="3" label="3" />
    </Picker> */}
    <TouchableOpacity onPress={() => navigation.replace("Search")}>
    <Text>Search</Text>
    </TouchableOpacity>
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
});
export default App;