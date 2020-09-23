import React from 'react';  
import {View,Text ,StyleSheet, TouchableOpacity} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph ,IconButton} from 'react-native-paper'; 
//import CardContent from 'react-native-paper/lib/typescript/src/components/Card/CardContent';
import * as Animatable from 'react-native-animatable' 
import Icon from 'react-native-vector-icons/FontAwesome'
import * as data from "../../Data/data";
const restData = data.restaurants; 

  
function NewIn() {
     //console.log(restData[6].name)
     return (
      <>
      <ScrollView>
         {restData.map((rest) => (
             <>
             <View>
              <TouchableOpacity onPress={() => navigation.navigate("Product")}>
                 <Card style={styles.cards}>
                     <Card.Cover source={{ uri: rest.photograph }} />
                         <TouchableOpacity  style={styles.heart}> 
                             <Icon name="heart" type="FontAwesome" color="#C0C0C0" size={35}
                             onPress={()=> {} } underlayColor={'#64b5f6'}/>
                         </TouchableOpacity>
                     <Card.Title title={rest.name} subtitle={rest.address}/>
                     
                     <Card.Content >  
                         <View style={styles.content}>
                             <Button style={{ }} mode="outlined" color = "#FF8C00" onPress={() => console.log('Pressed')} >{rest.neighborhood}</Button>
                             <Button style={{ marginLeft:155}} mode="contained" color = "#FF8C00" >10% OFF</Button>
                         </View >    
                     </Card.Content>
                     <View style={styles.cardFoot}> 
                         <Text style={{marginRight:5, marginTop:35, color: "white" }}> AED </Text> 
                         <Text style={{marginRight:0, fontSize: 20, marginTop:30, color: "white" }}>335</Text>   
                         <Text style={{fontSize: 40, marginRight:120, marginTop:15, color: "white" }}> 119 </Text>  
                         <Button style={styles.deal} mode="contained" title = "VIEW DEAL" onPress={() => navigation.navigate("Product")}></Button> 
                     </View >  
                 </Card>
             </TouchableOpacity>
             </View>
           </>
         ))}
         </ScrollView>
      </>
      
     );
   }
   export default NewIn ;
 
   const styles = StyleSheet.create({
     
     cards: {
       marginHorizontal: 5,
       marginVertical: 5,
       paddingVertical: 5,
       paddingHorizontal: 5,
       minHeight: 3,
       minWidth: 4,
     },
 
     content: {
     flexDirection: 'row',
     alignSelf:'stretch',
     },
 
     heart: {
         display: "flex",
         position: "absolute",
         right: 6,
         top: 4
     },
 
     deal:
     {
     borderRadius:20,
     borderWidth: 1,
     minWidth: 90,
     height: 25,
     marginRight:30,
     marginTop:20,
     backgroundColor: "white" 
     },
 
     cardFoot: {
     flexDirection: "row",
     backgroundColor: "#3399FF",
     // justifyContent: 'space-between',
     marginTop:15,
     height: 70,
     }
 
   });
