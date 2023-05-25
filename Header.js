import React from 'react';
import {View,Text} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
const Header=()=>{
    return(
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingVertical:20,paddingHorizontal:10}}>
        <Entypo name="notification" size={30} color="white"/>
        <Text style={{color:"white",fontSize:20,fontWeight:"700"}}>Meet & Chat</Text>
        <Entypo name='new-message' size={30} color="white"/>
        
    </View>
    )
}
export default Header