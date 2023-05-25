import {View,Text,SafeAreaView, TextInput, TouchableOpacity,StyleSheet,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,Image, Alert} from "react-native";
import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ChatData from "./ChatData";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import {firebase} from "./config";
import * as ImagePicker from "expo-image-picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Entypo from "react-native-vector-icons/Entypo";
const Chat=({setModalVisible})=>{
    const [input,setInput]=useState([''])
    const [messageData,setMessageData]=useState([{
        
        message:"Protocol omega is in effect",
        url:require("./assets/IshaanSaraswat2.jpg")
    },
    {
        name:"Dakota",
        message:"I think the same ishaan",
        url:require("./assets/dakota.jpg")
    },
    {
        name:"Taylor",
        message:"You guyz are not audible",
        url:require("./assets/Taylor.jpg")
    }

    ]);
    const handleChange=(e)=>{
        e.preventDefault();    
    
         setMessageData([...messageData,{messageData:input}]);
         Alert.alert("message sent")
        setInput("");
    }
    

    //matter for image uploading 
    const [image,setImage]=useState(null);
    const [uploadImage,setUploadImage]=useState(false);
    //function for opening the gallery
    const pickImage=async()=>{
        let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[1,4],
            quality:1
        });
        const source={uri:result.uri}
        console.log(source);
        setImage(source)

    }
    //function for uploading the image to the firebase data
    const uploadingImage=async()=>{
        setUploadImage(true);
        const response=await fetch(image.uri);
        const blob= await response.blob();
        const fileName=image.uri.substring(image.uri.lastIndexOf("/")+1);
        try{
        await firebase.storage.ref().child(fileName).put(blob);
        }catch(e){
            console.log(e);

        }
        setUploadImage(false);
        Alert.alert("Image has been uploaded");




    }


    return(
        <SafeAreaView style={{padding:8,marginLeft:5,flex:1,backgroundColor:"#1c1c1c"}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex:1}}>

              
            
            <ChatHeader setModalVisible={setModalVisible}/>
            
            

            {/* Now comes the chat messages */}
            <View style={{flex:1}}>
                {messageData.map((text)=>(
                    text.name?(
                        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                             <Image source={text.url} style={{height:40,width:40,borderRadius:50}} />
                            <Text style={{color:"white",backgroundColor:"grey",padding:14,borderRadius:20,marginTop:20,}}>
                        {text.message}
                        <Text style={{fontSize:10}}>
                            2m
                        </Text>
                    </Text>
                   
                            </View>
                        
                

                    ) : (
                        <View>
                        
                        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                            
                        <Text style={{color:"white",backgroundColor:"blue",padding:14,borderRadius:20,marginLeft:100}} >
                            {text.message}
                            <FontAwesome5 name="check-double" size={10} color="white"/>
                            
                        </Text>
                        <Image source={text.url} style={{height:40,width:40 ,borderRadius:50}}/>
                        <View>
                    
                    <Image source={text.url} style={{height:40,width:40 ,borderRadius:50}}/>
                </View> 
                        </View>
                        
                      
                        </View>
                          



                    )
                    

                ))}

                <View style={{marginLeft:"45%"}}>
                        {image && <Image source={{uri:image.uri}} style={{width:150,height:150}}/>

}
                            </View>
                 


                </View>
               
               

            {/*Type Messages */}
            <View style={{borderColor:"grey", borderTopWidth:1,backgroundColor:"#1c1c1c"}}>
                <View style={{flexDirection:"row"}}>
                <Text style={{color:"white"}}>
                    Send to: 
                </Text>
                <TouchableOpacity style={{height:20,width:60,backgroundColor:"#0B71EB",borderRadius:20,paddingHorizontal:1,flexDirection:"row",alignItems:"center"}}>
                    <Text style={{color:"white"}}>
                        Everyone
                    </Text>
                    <AntDesign name={"caretdown"} size={12} color="white"/>
                </TouchableOpacity>
                </View>
                <View style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
                <TextInput placeholderTextColor="#595859"  placeholder="Type a message to send" value={input} onChange={(e)=>setInput(e.target.value)} style={{borderColor:"#595859", borderWidth:1,borderRadius:10,padding:8,paddingVertical:3,marginTop:12,color:"white",width:"70%"}}/>
                <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
                <TouchableOpacity type="submit" style={{...styles.containerSend , backgroundColor: input ? "#grey" : "#0B71EB"}} onPress={handleChange}>
                <FontAwesome name={"send"} color="white" size={18} style={{marginLeft:3}}/>

                </TouchableOpacity>
                <TouchableOpacity onPress={pickImage}>
                    <MaterialIcons name="add-to-photos" size={22}   color="white" style={{marginLeft:-5,top:5}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={uploadingImage}>
            <FontAwesome name="upload" size={22} color="white" style={{top:3,marginLeft:7}}/>
           </TouchableOpacity>
                </View>
             
                </View>
                
                

            </View>
            </View>
            </TouchableWithoutFeedback>
           
            
        </SafeAreaView>

      

    )
}

const styles=StyleSheet.create({
    containerSend:
    {
        height:35,width:35,backgroundColor:"grey",justifyContent:"center",aligntItems:"center",marginTop:12,marginLeft:12
    }
}
)
export default Chat