import {BrowserRouter as Router, HashRouter, Route} from 'react-router-dom';
import Login from './containers/Login/login';
import Signup from './containers/Signup/signup';
import Degree from './containers/Signup/degree';
import Interests from './containers/Signup/interests';


import './App.css';

function App() {
    return (
        <HashRouter>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/degree" component={Degree}></Route>
            <Route exact path="/interests" component={Interests}></Route>
        </HashRouter>

    );
}

export default App;
