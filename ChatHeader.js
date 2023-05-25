import {View,Text, Pressable} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo"
const ChatHeader=({setModalVisible})=>{
    return(
        <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,paddingVertical:20,alignItems:"center"}}>
          <Pressable onPress={()=>{
            setModalVisible(false)
          }}>
            <Text style={{color:"white",fontSize:20}}>Close</Text>
          </Pressable>
          <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>
            Chat
          </Text>
          <Entypo name={"bell"} size={25} color="white"/>
        </View>
    )
}
export default ChatHeader;