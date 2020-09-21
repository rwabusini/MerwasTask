// //import 'react-native-gesture-handler';
// import React from 'react';
// import { Text, View, TouchableOpacity , StyleSheet} from 'react-native';
// import { NavigationNativeContainer } from '@react-navigation/native';
// import { useIsFocused } from "@react-navigation/core";
// import { createStackNavigator } from "@react-navigation/stack";

// //import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// //import { SafeAreaView } from 'react-native-safe-area-context';
// // import BestSellers from './src/screens/BestSellers';
// // import Featured from './src/screens/Featured';
// // import NewIn from './src/screens/NewIn';
// //import Animated from 'react-native-reanimated';
// //import Container from "./src/lib/routes"


// // function Featured1() {
// //   return (
// //      <Featured/>
// //   );
// // }




// const HomeScreen = ({ navigation }) => {
//   navigation.setOptions({
//     headerRight: () => (
//       <Button
//         title="Search"
//         onPress={() => {
//           //save the changes
//           navigation.replace("Search");
//         }}
//       />
//     )
//   });


//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>HomeScreen</Text>
//       <Button
//         title="Go To Cart Screen"
//         onPress={() => navigation.navigate("Cart")}
//       />
//     </View>
//   );
// };

// const CartScreen = ({ navigation }) => {
//   const isFocused = useIsFocused();
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text style={{ color: isFocused ? "green" : "black" }}>
//         CartScreen
//       </Text>
//       <Button title="Go To Home Screen" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// const ProductScreen = ({ navigation }) => {
//   const isFocused = useIsFocused();
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text style={{ color: isFocused ? "green" : "black" }}>
//         ProductScreen
//       </Text>
//       <Button title="Go To Home Screen" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };


// const Stack = createStackNavigator();

//  function App() {
//   return (
//     <NavigationNativeContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           options={{ title: "My Home Screen" }}
//           name="Home"
//           component={HomeScreen}
//         />
//         <Stack.Screen name="Cart" component={CartScreen} />
//         <Stack.Screen name="Product" component={ProductScreen} />
//       </Stack.Navigator>
//     </NavigationNativeContainer>
//   );
// }




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default App;




import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, TouchableOpacity , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import BestSellers from './src/screens/BestSellers';
import Featured from './src/screens/Featured';
import NewIn from './src/screens/NewIn';

//import Animated from 'react-native-reanimated';
import Container from "./src/lib/routes"

function Featured1() {
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


const Tab = createMaterialTopTabNavigator();

function App() {
  return (
  <>
 <SafeAreaView style={styles.container}>
    <NavigationContainer style={styles.container}>
   <Container/>
    <Tab.Navigator>
      <Tab.Screen name="FEATURED" component={Featured1} />
      <Tab.Screen name="NEW IN" component={NewIn1} />
      <Tab.Screen name="BEST SELLERS" component={BestSellers1} />
    </Tab.Navigator>
    </NavigationContainer>
   </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;