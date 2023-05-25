import React from "react";
import { View,Text } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
const SearchBar=()=>{
    return(
        <View style={{display:"flex",flexDirection:"row",borderRadius:10,alignItems:"center"}}>
           <Fontisto name="search" size={20} color="#858585" />
           <Text style={{backgroundColor:"#333333",paddingHorizontal:110,textAlign:"left",display:"flex",position:"relative",borderRadius:10,fontSize:19}}> Search </Text>
        </View>
    )
}
export default SearchBar