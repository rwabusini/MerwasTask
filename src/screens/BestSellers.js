
import React from 'react';  
import {View,Text ,StyleSheet, ScrollView , TouchableOpacity} from 'react-native'; 
//import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph ,IconButton} from 'react-native-paper'; 
//import CardContent from 'react-native-paper/lib/typescript/src/components/Card/CardContent';
import * as Animatable from 'react-native-animatable' 
import Icon from 'react-native-vector-icons/FontAwesome'
import * as data from "../../Data/data";
const restData = data.restaurants; 







function BestSellers({navigation}) {

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
                            <Button style={{ justifyContent: "flex-end"}} mode="outlined" color = "#FF8C00" onPress={() => console.log('Pressed')} >{rest.neighborhood}</Button>
                            <Button mode="contained" color = "#FF8C00" >10% OFF</Button>
                        </View >
                          
                 </Card.Content>
                 <View style={styles.cardFoot}> 
                            <Text style={{marginRight:30, marginTop:15 }}> AED 335 </Text>  
                            <Text style={{fontSize: 20, marginRight:100, marginTop:15, color: "white" }}> 119 </Text>  
                            <Button style={styles.deal} mode="contained" title = "VIEW DEAL" color = "white" onPress={() => navigation.navigate("Product")}/>  
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
  export default BestSellers ;

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
    justifyContent: 'space-between',
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
    borderRadius:10,
    borderWidth: 1,
    width: 10,
    height: 20,
    marginRight:30,
    marginTop:15
    },

    cardFoot: {
    flexDirection: "row",
    backgroundColor: "#3399FF",
    justifyContent: 'space-between',
    width: "auto",
    marginTop:15,
    height: 70,
    alignSelf:'stretch',
    }

  });


