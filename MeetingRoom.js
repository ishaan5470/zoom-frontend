import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react'; //useEffect will allow us to intitalize the connection with the backed
import {View,Text, TextInput, TouchableOpacity, SafeAreaView, Modal} from "react-native";
import StartMeeting from './StartMeeting';
import {io} from "socket.io-client";
import { Camera } from 'expo-camera';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Chat from './Chat';


//footer icons after the camera opens

const menuIcons=[
    {
        id:1,
        name:"microphone",
        title:"Mute",
        customColor:"#efefef"

    },
    {
        id:2,
        name:"video-camera",
        title:"Stop Video"
    },
    {
        id:3,
        name:"upload",
        title:"Share Content"
    },
    {
        id:4,
        name:"group",
        title:"Participants"
    }
]


const MeetingRoom=()=>{
    const navigation=useNavigation();
    const [name,setName]=useState(name);
    const [name1,setName1]=useState();
    const [roomId,setRoomId]=useState();
    const [activeUsers,setActiveUsers]=useState([]);
    const [startCamera,setStartCamera]=useState(false);
    const [modalVisible,setModalVisible]=useState(false)
        let socket;



     const _startCamera= async()=>{
            //first request permisson 
            const {status}= await Camera.requestCameraPermissionsAsync();
            if (status === "granted"){
                setStartCamera(true);

            }
            else {
                Alert.alert("Permission Denied");
            }

        }

    const joinRoom=()=>{
        _startCamera();
        //when we joint we emit something like a signal 
        socket.emit('join-room',{roomId:name1,userName:name})
    } 




    //as soon as i click start a meeting useEffect will come into play 
    useEffect(()=>{
        socket=io("http://d7ba-2409-4050-2e37-7e04-1a7-6873-fc4a-b94f.ngrok.io")
        console.log("yooo connected")
        socket.on("connection",()=>console.log("connected"));
        //now we emit all the users we get 
        socket.on("all-users",users=>{
            console.log("Active Users");
            console.log(users);
            setActiveUsers(users);

        })

    },[])
   
    return(
        <View style={{backgroundColor:"#1c1c1c",flex:1}}>
{startCamera ? (
    <SafeAreaView style={{display:"flex",flexDirection:"row",flexWrap:"wrap",backgroundColor:"black"}}>

<Modal animationType='slide' transparent={false} presentationStyle={"fullScreen"} visible={modalVisible} onRequestClose={()=>{
    setModalVisible(!modalVisible)
}}>
    <Chat modalVisible={modalVisible} setModalVisible={setModalVisible}/>

</Modal>

        <Camera 
    style={{width: activeUsers.length==0 ? "100%" :200
    ,height: activeUsers.length==0  ? 500: 200,paddingLeft:10}}
    type={'back'}
    
    >

    </Camera>
    {activeUsers.filter(user=>(user.userName!=name)).map((user,index)=>(
        <View key={index} style={{borderColor:"red",borderWidth:1,width:200,height:200,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"white"}}>
            {user.userName} {user.roomId}
        </Text>
        

        </View>
    ))}
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",margin:15, backgroundColor:"black",position:"absolute",width:"100%",top:590}}>
        {menuIcons.map((item1,item2)=> (
            <TouchableOpacity key={item2} style={{justifyContent:"center", alignItems:"center",marginTop:15}}>
            <FontAwesome name={item1.name} size={18} color="#efefef"/>
            <Text style={{color:"white",marginTop:10, fontSize:10}}> 
                {item1.title}
            </Text>

        </TouchableOpacity>


        ))}
        <TouchableOpacity onPress={()=>setModalVisible(true)} style={{justifyContent:"center", alignItems:"center",marginTop:15}}>
            <FontAwesome name={"comment"} size={18} color="#efefef"/>
            <Text style={{color:"white",marginTop:10,fontSize:10}}> 
                Chat
            </Text>

        </TouchableOpacity>
        
    </View>
    </SafeAreaView>
    
) : (
    <StartMeeting name={name} setName={setName} name1={name1} setName1={setName1} joinRoom={joinRoom}/>

)}
            
            
        </View>
    )
}
export default MeetingRoom;