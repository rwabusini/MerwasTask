
import React from 'react';  
import {View,Text ,StyleSheet, TouchableOpacity} from 'react-native'; 
import {Button, Card} from 'react-native-paper'; 
import Icon from 'react-native-vector-icons/FontAwesome'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
function ProductScreen  ({ navigation }) {
    return ( 
        <>
    <View style={{flex: 1}}>
        <ScrollView>
        <View style = {{margin: 10}}>
                    <Text>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen
                    </Text>
        </View>
        <Card style={styles.cards}>
            <Card.Cover source={{ uri: "https://static01.nyt.com/images/2015/06/10/dining/20150610REST-slide-FY5Z/20150610REST-slide-FY5Z-superJumbo.jpg" }} />
                        
             <Text style = {{color : "#FF8C00", marginTop: 15, marginLeft: 100 }} >
             <AntDesign style = {{marginLeft: 10}} name="clockcircleo" type="AntDesign" color="#FF8C00" size={15}/> FOR A LIMITED TIME ONLY</Text>
             <Card.Content >  
                <View style={styles.content}>
                     <Button  mode = "contained" style={{ marginLeft:100, marginTop: 10, borderWidth: 1, borderColor: "black" }} color = "#ffff" >  <AntDesign  name="checkcircle" type="AntDesign" color="#009900" size={20}/> <Text  style ={{color:"#009900" }}>3874 BOUGHT</Text></Button>
                </View >  
                <TouchableOpacity  style={styles.heart}> 
                    <Icon name="heart" type="FontAwesome" color="#C0C0C0" size={35} onPress={()=> {} } underlayColor={'#64b5f6'}/>
                </TouchableOpacity>
             </Card.Content>
        </Card>

        <View style = {{margin: 10,}}>
            <View style = {{flexDirection:"row"}}>
                <Foundation name="list-bullet" type="Foundation" color="#C0C0C0" size={25}/>
                <Text style = {{fontSize:18, marginTop: 2, color:"#C0C0C0" }}> CHOOSE YOUR OPTION</Text>
            </View>
        </View>
        <View style = {{borderLeftColor: "#C0C0C0", borderLeftWidth: 4, marginLeft: 5}}>
            <Text> OPTION 1: Weekday Option - Pool access for 1 adult</Text>
                <View style= {{marginTop: 10}}>
                            <Text style = {{fontSize:10, marginTop: 20, marginLeft: 40, color:"#808080" }}> Quantity </Text>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <View>
                            <View style={{flexDirection:"row", marginTop:2, marginLeft: 20}}>
                                <TouchableOpacity style={{backgroundColor: "#e0e0e0" ,width: 30, height: 30 }}>
                                    <AntDesign name ="minus"  color="#808080" type="AntDesign" size={30}/>
                                </TouchableOpacity>
                                <Text style={{fontSize: 20}}>  0  </Text>
                                <TouchableOpacity style={{backgroundColor: "#e0e0e0" ,width:30, height: 30}}>
                                    <AntDesign name ="plus"  color="#808080" type="AntDesign" size={30}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style = {{fontSize:20, marginTop: 0, marginLeft: 80, color:"#0080ff" }}> AED 59  </Text> 
                            <View style={{flexDirection:"row"}}>
                                <Text style={{marginTop:8, color:"#FF8C00", backgroundColor:"#e0e0e0"}} > 61% OFF</Text>
                                <Text style = {{fontSize:18, marginTop: 5, marginLeft: 20, color:"#a0a0a0",textDecorationLine: 'line-through' }}>AED 150  </Text>
                            </View>        
                        </View>
                    </View>
                </View>
         </View>

        
        <View style = {{borderLeftColor: "#C0C0C0", borderLeftWidth: 4, marginLeft: 5, marginTop:10}}>
            <Text> OPTION 1: Weekday Option - Pool access for 1 adult</Text>
                <View style= {{marginTop: 10}}>
                            <Text style = {{fontSize:10, marginTop: 20, marginLeft: 40, color:"#808080" }}> Quantity </Text>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <View>
                            <View style={{flexDirection:"row", marginTop:2, marginLeft: 20}}>
                                <TouchableOpacity style={{backgroundColor: "#e0e0e0" ,width: 30, height: 30 }}>
                                    <AntDesign name ="minus"  color="#808080" type="AntDesign" size={30}/>
                                </TouchableOpacity>
                                <Text style={{fontSize: 20}}>  0  </Text>
                                <TouchableOpacity style={{backgroundColor: "#e0e0e0" ,width:30, height: 30}}>
                                    <AntDesign name ="plus"  color="#808080" type="AntDesign" size={30}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style = {{fontSize:20, marginTop: 0, marginLeft: 80, color:"#0080ff" }}> AED 59  </Text> 
                            <View style={{flexDirection:"row"}}>
                                <Text style={{marginTop:8, color:"#FF8C00", backgroundColor:"#e0e0e0"}} > 61% OFF</Text>
                                <Text style = {{fontSize:18, marginTop: 5, marginLeft: 20, color:"#a0a0a0",textDecorationLine: 'line-through' }}>AED 150  </Text>
                            </View>        
                        </View>
                    </View>
                </View>
         </View>

         
        <View style = {{borderLeftColor: "#C0C0C0", borderLeftWidth: 4, marginLeft: 5, marginTop:10}}>
            <Text> OPTION 1: Weekday Option - Pool access for 1 adult</Text>
                <View style= {{marginTop: 10}}>
                            <Text style = {{fontSize:10, marginTop: 20, marginLeft: 40, color:"#808080" }}> Quantity </Text>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <View>
                            <View style={{flexDirection:"row", marginTop:2, marginLeft: 20}}>
                                <TouchableOpacity style={{backgroundColor: "#e0e0e0" ,width: 30, height: 30 }}>
                                    <AntDesign name ="minus"  color="#808080" type="AntDesign" size={30}/>
                                </TouchableOpacity>
                                <Text style={{fontSize: 20}}>  0  </Text>
                                <TouchableOpacity style={{backgroundColor: "#e0e0e0" ,width:30, height: 30}}>
                                    <AntDesign name ="plus"  color="#808080" type="AntDesign" size={30}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style = {{fontSize:20, marginTop: 0, marginLeft: 80, color:"#0080ff" }}> AED 59  </Text> 
                            <View style={{flexDirection:"row"}}>
                                <Text style={{marginTop:8, color:"#FF8C00", backgroundColor:"#e0e0e0"}} > 61% OFF</Text>
                                <Text style = {{fontSize:18, marginTop: 5, marginLeft: 20, color:"#a0a0a0",textDecorationLine: 'line-through' }}>AED 150  </Text>
                            </View>        
                        </View>
                    </View>
                </View>
         </View>


         <View style = {{borderLeftColor: "#C0C0C0", borderLeftWidth: 4, marginLeft: 5, marginTop:10}}>
            <Text> OPTION 1: Weekday Option - Pool access for 1 adult</Text>
                <View style= {{marginTop: 10}}>
                            <Text style = {{fontSize:10, marginTop: 20, marginLeft: 40, color:"#808080" }}> Quantity </Text>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <View>
                            <View style={{flexDirection:"row", marginTop:2, marginLeft: 20}}>
                                <TouchableOpacity style={{backgroundColor: "#e0e0e0" ,width: 30, height: 30 }}>
                                    <AntDesign name ="minus"  color="#808080" type="AntDesign" size={30}/>
                                </TouchableOpacity>
                                <Text style={{fontSize: 20}}>  0  </Text>
                                <TouchableOpacity style={{backgroundColor: "#e0e0e0" ,width:30, height: 30}}>
                                    <AntDesign name ="plus"  color="#808080" type="AntDesign" size={30}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style = {{fontSize:20, marginTop: 0, marginLeft: 80, color:"#0080ff" }}> AED 59  </Text> 
                            <View style={{flexDirection:"row"}}>
                                <Text style={{marginTop:8, color:"#FF8C00", backgroundColor:"#e0e0e0"}} > 61% OFF</Text>
                                <Text style = {{fontSize:18, marginTop: 5, marginLeft: 20, color:"#a0a0a0",textDecorationLine: 'line-through' }}>AED 150  </Text>
                            </View>        
                        </View>
                    </View>
                </View>
                </View>
    
         </ScrollView>
         <View style= {{height: 80}}>
         
             <Button mode= "contained" color= "#0080ff"><MaterialIcons name ="add-shopping-cart" type = "MaterialIcons" size = {20} /> <Text style= {{fontSize:18}}>ADD TO CART </Text> </Button>
             <Text style= {{marginLeft: 120, textDecorationLine: 'underline', fontSize:15}}> Log in for Quick Checkout </Text>
         </View>
    </View>
        </>
     );
};

export default ProductScreen;

const styles = StyleSheet.create({
       
    cards: {
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
    marginTop:15,
    height: 70,
    }

  });