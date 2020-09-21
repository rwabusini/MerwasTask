//import 'react-native-gesture-handler';
import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/core";
import { createStackNavigator } from "@react-navigation/stack";
import Featured from "./src/screens/Featured"; 
import NewIn from "./src/screens/NewIn"; 
import BestSellers from "./src/screens/BestSellers"; 
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'; 


 
function Featured2() {
  return ( 
  <Featured/>     
  );
}

 
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

const HomeScreen = ({ navigation }) => {
navigation.setOptions({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.replace("Search")}>
      <Text>Search</Text>
    </TouchableOpacity>
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


      // <Tab.Navigator>
      //   <Tab.Screen name="NEW IN" component={NewIn1} />
      //   <Tab.Screen name="BEST SELLERS" component={BestSellers1} />
      // </Tab.Navigator>


const ProductScreen = ({ navigation }) => {
const isFocused = useIsFocused();
return (
<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  <Text style={{ color: isFocused ? "green" : "black" }}>ProductScreen</Text>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text>"Go To Home Screen"</Text>
  </TouchableOpacity>
</View>
);
};

const Stack = createStackNavigator();


function App() {
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
    
      name="Home"
      component={HomeScreen}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Featured" component={Featured2} />
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