import {HashRouter, Route} from 'react-router-dom';
import Login from './containers/Login/login';
import Signup from './containers/Signup/signup';
import Home from './containers/Home/home';
import Mentors from './containers/Pairing/mentor';
import Professional from './containers/Pairing/professional';




import './App.css';

function App() {
    return (
        <HashRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignupGroup}/>
            <Route exact path="/mentors" component={Mentors} />
            <Route exact path="/professionals" component={Professional} />
        </HashRouter>

    );
}

export default App;
