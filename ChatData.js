import {View,Text} from "react-native";
import React, { useState } from "react";
const ChatData=()=>{
    const [input,setInput]=useState([''])
    const [messageData,setMessageData]=useState([{
        name:"Ishaan",
        message:"Protocol omega is in effect",
        url:"IshaanSaraswat2.jpg"
    },
    {
        name:"Dakota",
        message:"I think the same ishaan",
        url:"dakota.jpg"
    },
    {
        name:"Taylor",
        message:"You guyz are not audible",
        url:"Taylor.jpg"
    }

    ])
    const handleChange=(e)=>{
        e.preventDefault;
        setMessageData([...messageData,{messageData:input}])
        setInput(" ");

    }
    return(
        <View>
            <Text style={{color:"white"}}>
                ChatData
            </Text>
        </View>
    )
}
export default ChatData;
