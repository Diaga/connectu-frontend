import {HashRouter, Route} from 'react-router-dom';
import Login from './containers/Login/login';
import Signup from './containers/Signup/signup';
import Degree from './containers/Signup/degree';
import Interests from './containers/Signup/interests';
import Home from './containers/Home/home';
import Mentors from './containers/Pairing/mentor';
import Professional from './containers/Pairing/professional';
import Chat from './containers/Chat/Chat';



import './App.css';

function App() {
    return (
        <HashRouter>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/degree" component={Degree}></Route>
            <Route exact path="/interests" component={Interests}></Route>
            <Route exact path="/mentors" component={Mentors}></Route>
            <Route exact path="/chat" component={Chat}></Route>
            <Route exact path="/professionals" component={Professional}></Route>
        </HashRouter>

    );
}

export default App;
