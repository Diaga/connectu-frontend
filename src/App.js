import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './containers/Login/login';
import Signup from './containers/Signup/signup';
import Degree from './containers/Signup/degree';
import Interests from './containers/Signup/interests';


import './App.css';

function App() {
  return (
    <Router>
     <Route path="/login" component={Login}></Route>
     <Route path="/signup" component={Signup}></Route>
     <Route path="/degree" component={Degree}></Route>
     <Route path="/interests" component={Interests}></Route>

     


   </Router>
    
   
  );
}

export default App;
