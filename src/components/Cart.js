import React from 'react';
import { View , Image, Text, TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';

function CartScreen  () {
    return (   
    <View style={{backgroundColor:"white"}}> 
        <View style={{  flexDirection: "row", borderBottomWidth: 1, height:135, borderBottomColor:"#A0A0A0",width: 350 }}>
            <Image style={{ width: 110 ,height: 60}}
            source = {{uri: "https://static01.nyt.com/images/2015/06/10/dining/20150610REST-slide-FY5Z/20150610REST-slide-FY5Z-superJumbo.jpg"}} />
            <View style={{ flex: 1, marginTop: 6, marginLeft:5, borderRightColor: '#A0A0A0', borderRightWidth: 1, height:125 }}>
                <Text>Mission Chinese Food</Text>
                <Text style={{color:"#C0C0C0",}}>171 E Broadway, New York, NY 10002</Text>
                <View style={{marginTop:10}}>
                    <Text style={{color:"#C0C0C0"}}>Select The quantity:</Text>     
                </View>
                <View style={{ marginTop:10, marginLeft:15 ,flex: 1, flexDirection: "row"} }>
                    <Ionicons style = {{marginTop:0}} name="remove-circle-outline" type="Ionicons" color="#C0C0C0" size={28}/>
                    <TouchableOpacity style = {{marginTop:1, marginLeft:5, borderWidth: 1, width: 25 ,height: 25,borderRadius: 25/2, borderColor: "#3399FF"}}>
                        <Text style={{ fontSize: 15, justifyContent: "center", marginTop:2, color: "#3399FF"}}>  1</Text> 
                    </TouchableOpacity>
                    <Ionicons style = {{marginLeft:5}} name="add-circle-outline" type="Ionicons" color="#A0A0A0" size={28}/>
                    <FontAwesome style = {{marginLeft:30,marginTop:2}} name="trash-o" type="FontAwesome" color="#A0A0A0" size={25}/>
                </View> 
            </View>

            <View style={{justifyContent: "center", height: 130, }}>
                <Text style={{fontSize: 30, color: "#3399FF", marginHorizontal: 5}}> 109</Text>
                <Text style={{ alignContent:"center", marginLeft: 20 }}>AED</Text>
            </View>
        </View>

        <View style = {{flexDirection:"row", borderTopWidth: 1, marginTop: 440, borderColor: "#E0E0E0", justifyContent:'space-between'}}>
            <Text style={{marginTop:10, fontSize: 20, color: "#a0a0a0"}}>  Discount code </Text>
            <Button mode = "contained" style={{marginTop:10, marginRight:5, borderRadius: 10, height:30, width: 90}} color = "#a0a0a0" ><Text style={{color: '#fff', fontSize:12}}>Apply</Text></Button>
        </View> 
        <View style = {{flexDirection:"row", justifyContent: "space-between" ,backgroundColor: "#E0E0E0", marginTop: 15}}>
           
           <View>
           <Text style={{color: "#606060", fontSize:25,marginTop:5}}> Total</Text>
           <Text style={{}}> Prices shown are inclusive of VAT where appli</Text>
           </View>

           <View style = {{flexDirection:"row"}}>
             <Text style={{marginTop:34, fontSize:15}} > AED</Text>   
           <Text style={{marginTop:15, color: "#3399FF", fontSize:35,}} >109</Text>
           </View>
        </View>
        <View>
        <Button mode = "contained" style={{marginTop:10, marginRight:5, borderRadius: 25, width: 350, marginLeft: 35, shadowOpacity: 1}} color = "#3399FF" ><Text style={{color: '#E5FFCC', fontSize:18}}>Next</Text></Button>
        </View>

    </View> 
      
    );
    };

    export default CartScreen;