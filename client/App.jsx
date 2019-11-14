import React from  "react";
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// increase the limit
myEmitter.setMaxListeners(100);
//react-bootstrap has pre-made css files that tidy up a little from default
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.scss'

import MainContainer from "./containers/MainContainer.jsx";


const io=require('socket.io').listen(3000)
// const socket=io('http://localhost:3000')
//We used functional components throughout the application so we could utilize hooks
    //functional components don't require you to make constructors
    //they also don't need to have a super as a result
    //you pass in the name of your props inside the parameters of your function
    //note that there is no render() method as the implicit method in a functional component is render()
//We didn't instantiate state at the parent level because none of the state we use relates to other components

const App = () => {  

    const [theme,setTheme]=useState('fire');
    //toggle states: 'fire', 'earth', 'air'(tornado), drought, 'water' 
    //the containers will look exactly the same only different apis and data,
    //use css transition to make the screen rain
    return (
        <MainContainer />
      );
}

 
export default App;