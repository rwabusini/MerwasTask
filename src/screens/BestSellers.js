
// import React from 'react';  
// import {View,Text ,StyleSheet, ScrollView } from 'react-native'; 
// //import { ScrollView } from 'react-native-gesture-handler';
// import { Avatar, Button, Card, Title, Paragraph ,IconButton} from 'react-native-paper'; 
// //import CardContent from 'react-native-paper/lib/typescript/src/components/Card/CardContent';
// import * as Animatable from 'react-native-animatable' 
// import Icon from 'react-native-vector-icons/AntDesign'
// import * as data from "../../Data/data";
// const restData = data.restaurants; 







// function BestSellers() {

//     //console.log(restData[6].name)
//     return (
//      <>
//      <ScrollView>
//         {restData.map((rest) => (
//             <>
            
//                 <Card style={styles.cards}>
               
//                  <Card.Cover source={{ uri: rest.photograph }} />
//                  <Card.Title title={rest.name} subtitle={rest.address}/>
                
//                  <Card.Content style={styles.content}>
//                     <Button mode="outlined" color = "#FF8C00" onPress={() => console.log('Pressed')} >{rest.neighborhood}</Button>
//                     <Button mode="contained" color = "#FF8C00" >10% OFF</Button>
//                  </Card.Content>
//                 </Card>
            
//           </>
//         ))}
//         </ScrollView>
//      </>
     
//     );
//   }
//   export default BestSellers ;

//   const styles = StyleSheet.create({
    
//     cards: {
//       marginHorizontal: 5,
//       marginVertical: 5,
//       paddingVertical: 5,
//       paddingHorizontal: 5,
//       minHeight: 3,
//       minWidth: 4,
//     },

//     content: {flexDirection: 'row',
//     justifyContent: 'space-between',
// },

//   });


// // import React from 'react';  
// // import {View,Text} from 'react-native'; 
// // import { ScrollView } from 'react-native-gesture-handler';
// // import { Avatar, Button, Card, Title, FlatList } from 'react-native-paper'; 
// // import * as data from "../../Data/data";
// // const RestData = data.restaurants; 

// // function BestSellers() {

// //     const renderItem = ({ item }) => (
// //         <Card>
// //                  <Card.Cover source={{ uri: item.photograph }} />
// //                  <Card.Title title={item.name} subtitle={item.address}  />
// //                 </Card>
// //       );
// //     //console.log(restData[6].name)
// //     return (
// //      <>
// //         {/* {restData.map((rest) => ( */}
// //             <>
// //              <FlatList
// //         data={RestData}
// //         renderItem={renderItem}
// //      />

                
           
// //           </>
// //          {/* ))} */}
// //      </>
     
// //     );
// //   }
// //   export default BestSellers ;