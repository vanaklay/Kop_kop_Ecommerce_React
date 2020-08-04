import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage';

const SomePage = () => {
  return (
    <div><h1>SomePage</h1></div>
  );
};
function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/page' component={SomePage} />
    </Switch>
  );
}

export default App;
