import React from "react";
import {View,Text,Image} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const ContactMenu=()=>{
    const items=[
        {
            type:"starred",
            name:"starred"
        },
        {
            type:"contant",
            name:"Ishaan Saraswat",
            photo:require("./assets/IshaanSaraswat2.jpg")
        },
        {
            type:"contant",
            name:"Taylor Swift",
            photo:require("./assets/Taylor.jpg")
        },
        {
            type:"content",
            name:"Dakota Johnson",
            photo:require("./assets/dakota.jpg")
        }
    ]
    return(
        <View style={{marginBottom:200 ,display:"flex", overflow:"scroll",marginTop:100}}>
            {items.map((item1,item2)=>

<View  style={{display:"flex",flexDirection:"row",alignItems:"center",margin:10}}>
{item1.type=="starred" ? (
    <View style={{backgroundColor:"#333333",height:55,width:55,justifyContent:"center",alignItems:"center",borderRadius:20 }}>
    <AntDesign name="star" size={23} color="#efefef"/>
    
</View>

) : (
    <Image source={item1.photo} style={{width:55,height:55,borderRadius:20}} key={item2}/>
)}


<Text style={{color:"white",paddingLeft:15,fontSize:18 }}>
    {item1.name}
   

</Text>

</View>

            )}

            
        </View>
    )
}
export default ContactMenu