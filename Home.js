import {View,Text,SafeAreaView} from "react-native";
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import MenuButton from "./MenuButton"
import ContactMenu from "./ContactMenu";
const Home=({navigation})=>{
    return(
    <View style={{padding:15,marginTop:25,backgroundColor:"#1c1c1c",padding:20,overflow:"scroll"}}>
        <SafeAreaView style={{height:'100%'}}>
        <Header/>
        <SearchBar/>
        <MenuButton navigation={navigation}/>
        <ContactMenu/>
    
        </SafeAreaView>
    </View>
    )
}
export default Home;