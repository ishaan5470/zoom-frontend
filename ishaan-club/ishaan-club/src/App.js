import React from 'react'
import Welcome from './Welcome';
import Next from './Next';


import { BrowserRouter ,Route, useHistory} from 'react-router-dom';
import PhoneConfirm from './PhoneConfirm';
/*if Router doesnt work or it shows switch was not found then run "npm install react-router-dom@5.2.0"*/
import Notification from './Notification';
import { Switch } from "react-router-dom";
import Home from "./Home"


function App() {
 
  return (
    <BrowserRouter> 
    <Switch>
    <Route exact path={[
      "/homepage", "/phoneconfirm","/next", "/notification","/home",'/friendinvite'
    ]}> {/* this allowe user to only to got these route availaible in the array not any other except it */}
    <Route exact path='/homepage'>
      <h1> <Welcome/></h1>
    </Route>
    <Route exact  path='/phoneconfirm'>
      
     <PhoneConfirm/>
      
    </Route>
    <Route  exact path='/next'>
     
      <Next/>
     
    </Route>
    <Route exact path="/notification">
      <Notification/>
    
    </Route>
    <Route path="/home">
      <Home/>
    </Route>
    <Route exact path='/friendinvite'>
      it works
    </Route>
    
    </Route>
    
  
    
    </Switch>
   
    


    </BrowserRouter>
  

  )
}

export default App;