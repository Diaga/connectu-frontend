import {HashRouter, Route} from 'react-router-dom';
import Login from './containers/Login/login';
import {SignupGroup} from './containers/Signup/signupGroup';
import Home from './containers/Home/home';
import Mentors from './containers/Pairing/mentor';


import './App.css';

function App() {
    return (
        <HashRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignupGroup}/>
            <Route exact path="/mentors" component={Mentors}/>
        </HashRouter>

    );
}

export default App;
