import {View,Text,TextInput,TouchableOpacity} from "react-native";
import { useState } from "react";
import React from "react";
const StartMeeting=({name,setName,name1,setName1,joinRoom})=>{
    return(
        <View>
        <View style={{width:"100%",backgroundColor:"#373538", borderTopWidth:1,borderBottomWidth:1,borderColor:"#484648",height:50,justifyContent:"center",padding:15}}>
            <TextInput value={name} onChangeText={text=>setName(text)} placeholder="Enter name" placeholderTextColor="#767476" style={{color:"white"}} />

        </View>
        <View style= {{width:"100%",backgroundColor:"#373538", borderTopWidth:1,borderBottomWidth:1,borderColor:"#484648",height:50,justifyContent:"center",padding:15}}>
        <TextInput value={name1} onChangeText={text=>setName1(text)} placeholder="Enter a ID" placeholderTextColor="#767476" style={{color:"white"}}/>

        </View>
        <View style={{alignItems:"center"}}>
            <TouchableOpacity style={{alignItems:"center",padding:15,backgroundColor:"#0470DC",borderRadius:15,width:320, justifyContent:"center",marginTop:20,height:50}}>
                <Text style={{color:"white"}} onPress={()=>joinRoom()}>
                    Start a Meeting
                </Text>
            </TouchableOpacity>
        </View>

    </View>
    
    )
}
export default StartMeeting;