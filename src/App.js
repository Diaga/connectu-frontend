import {HashRouter, Route} from 'react-router-dom';
import Login from './containers/Login/login';
import {SignupGroup} from './containers/Signup/signupGroup';
import Home from './containers/Home/home';
import Mentors from './containers/Pairing/mentor';
import Professional from './containers/Pairing/professional';



import './App.css';
import Answers from "./containers/Home/answers";

function App() {
    return (
        <HashRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/question/:id" component={Answers}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignupGroup}/>
            <Route exact path="/mentors" component={Mentors}/>
            <Route exact path="/professionals" component={Professional} />
        </HashRouter>

    );
}

export default App;
