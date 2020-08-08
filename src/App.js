import React, { useEffect } from 'react';
import { Switch ,Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import CheckoutPage from './pages/checkout/CheckoutPage';

import { auth, createUserProfileDocument } from './services/firebase';

import { setCurrentUser } from './redux/actions';
import { selectCurrentUser } from './redux/selectors/user.selectors';


function App(props) {
  const { setCurrentUser, currentUser } = props;
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id ,...snapShot.data()});
        });
        
      } else {
        setCurrentUser(userAuth);
      }
    });
    // Clean up the subscription
    return () => { unsubscribeFromAuth() };
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => currentUser ? 
              (<Redirect to='/' />) : (<SignInAndSignUp />)} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
    
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
