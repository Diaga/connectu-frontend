import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './containers/Login/login';

import './App.css';

function App() {
  return (
    <Router>
     <Route path="/login" component={Login}></Route>
     


   </Router>
    
   
  );
}

export default App;
