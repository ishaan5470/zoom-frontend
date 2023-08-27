import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import { createStackNavigator } from '@react-navigation/stack'; //npm install @react-navigation/stack --save
import { NavigationContainer } from '@react-navigation/native'; //npm install @react-navigation/native --save

import MeetingRoom from "./MeetingRoom"


export default function App() {
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Room' component={MeetingRoom} options={{
          headerTitle:"Start a Meeting",
          headerStyle:{backgroundColor:"#1C1C1C"},
          headerTintColor:"white" 
        }}/>
      </Stack.Navigator>
      
    </NavigationContainer>

    
  )
}

