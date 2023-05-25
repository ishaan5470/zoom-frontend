import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const MenuButton=()=>{ 
    const navigation=useNavigation();
const items=[
    {
        id:1,
        name:"video-camera",
        title:"New Meeting",
        color:"orange"
    },
    {
        id:2,
        name:"plus-square",
        title:"Join",
        color:""
    },
    {
        id:3,
        name:"calendar",
        title:"Schedule"
    },
    {
        id:4,
        name:"upload",
        title:"Share Screen"
    }
    
]
const openMeeting=()=>{
    navigation.navigate("Room")
}

    return(
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",flex:1}}>

            {items.map((item1,item2)=>
             <View style={{alignItems:"center",marginTop:20,borderBottomColor:"#1F1F1F",borderBottomWidth:1}}>
             <TouchableOpacity onPress={()=>openMeeting()}  style={{backgroundColor:"orange",height:50,width:50,borderRadius:16,justifyContent:"center",alignItems:"center", backgroundColor:item1.color? item1.color:"blue"}}>
                 <FontAwesome name={item1.name} size={23} color="#efefef"/>

             </TouchableOpacity>
             <Text style={{color:"white",fontSize:12,paddingTop:10,fontWeight:"700"}}> {item1.title}</Text>
         </View>
         )}
           
        </View>
    )
}
export default MenuButton