import React, {Component} from "react";

import {
    Typography,
    AppBar, Tabs, Tab, Button
} from "@material-ui/core";

import {withStyles} from "@material-ui/core/styles";

import {isUserLoggedIn} from "../../services/user_api";
import Toolbar from "@material-ui/core/Toolbar";
import {tabData} from "./components/tabData";

import logo from '../../images/ConnectU.svg';
import flash from '../../images/flash.svg';
import Questions from "./questions";
import Chat from "./chat";
import Notifications from "./notifications";

const useStyles = (theme) => ({
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        width: "80%",
        padding: theme.spacing(3),
    },
    root: {
        display: "flex",

    },

    sidebar: {
        width: "20%",
        padding: theme.spacing(3),
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
        overflow: "hidden",
        [theme.breakpoints.down("xs")]: {
            width: theme.spacing(9),
            height: theme.spacing(9),
        },
    },
    radiolabels: {
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        },
    },

});


class Home extends Component {

    handleOptionChange = (e) => {
        if (e.target.value === "student") {
            this.props.history.push("./mentors");
        } else if (e.target.value === "professional") {
            this.props.history.push("./professionals");
        }
    };

    state = {
        tabValue: 0
    }

    render() {
        const classes = this.props;

        if (!isUserLoggedIn()) {
            this.props.history.push('./login');
        }
        return (
            <div>
                <AppBar position="static"
                        style={{background: 'white', color: '#b92b27'}}
                        elevation={0}>
                    <Toolbar style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={logo} alt='Logo' style={{width: 30, height: 30}}/>
                        <Typography variant="h6" className={classes.title} style={{fontWeight: 'bold'}}>
                            ConnectU
                        </Typography>
                        <Tabs value={this.state.tabValue} style={{marginLeft: 50, fontWeight: 'bold'}} onChange={() => {
                        }}>
                            <Tab icon={tabData({icon: 'home', selected: 0 === this.state.tabValue})}
                                 onClick={() => this.setState({tabValue: 0})}/>
                            <Tab icon={tabData({icon: 'chat', selected: 1 === this.state.tabValue})}
                                 onClick={() => this.setState({tabValue: 1})}/>
                            <Tab icon={tabData({icon: 'notifications', selected: 2 === this.state.tabValue})}
                                 onClick={() => this.setState({tabValue: 2})}/>
                        </Tabs>

                        <Button variant="contained" size="large" color="primary"
                                className={classes.button} onClick={() => {
                        }}
                                style={{borderRadius: 10, marginLeft: 300}}>
                            <img alt="Spark my career" src={flash} style={{width: 20, height: 20}}/> <span
                            style={{marginLeft: 8}}>Spark my career!</span>
                        </Button>
                    </Toolbar>
                </AppBar>

                {(this.state.tabValue === 0) ? <Questions/> : (this.state.tabValue === 1) ? <Chat/> : <Notifications/>}
            </div>
        );
    }
}

export default withStyles(useStyles,
    {
        withTheme: true
    }
)(Home);
