import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import { useState } from 'react';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {

  const [{}, dispatch] = useStateValue();

  useState( () => {
      auth.onAuthStateChanged( (authUser) => 
          {
          console.log('The user is >>>', authUser) 
          
          if (authUser) {
            //User logged in or page refrshed
            dispatch({
              type: 'ADD_USER',
              user: authUser
            })
          }
          else{
            dispatch({
              type: 'ADD_USER',
              user: null
            })
            
          }
        }
        )


    },[]    
  )


  return (
    //BEM
    <Router>
    <div className="App">
      <Switch>
        <Route path = '/login'>
          <Login/>
        </Route>
        <Route path = '/checkout'>
          <Header/>
          <Checkout/>
        </Route>
        <Route path = '/payment'>
        <Header/>
        <Payment/>
        {/* <h1>I am the payment route</h1> */}
        </Route>
        <Route path = '/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>      
    </div>
    </Router>
 
   
  );
}

export default App;
