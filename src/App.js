import React, { useState, useEffect } from 'react';
import { Switch ,Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth } from './services/firebase';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged( user => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
    
  );
}

/* 
// How to make the app aware that user is logged in
// --- Manage state with class component --- 
class App extends React.Component {
  // 1. Create a constructor
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  // 2. Use componentDidMount when the app first render to store user inside the state
  // 3. Set up a property to store the subscription
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });
    })
  }
  // 4. Close the subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
      
    );
  }

} 
*/

export default App;
