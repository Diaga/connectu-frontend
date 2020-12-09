import React, {Component} from "react";
import Question from './components/question';

import {createAnswer, getQuestion} from "../../services/forum_api";
import {getSelfUser} from "../../services/user_api";

import {AppBar, Button, Tab, Tabs, TextField, Typography} from "@material-ui/core";
import profileIcon from "../../images/profile-photo-icon-red.svg";
import {useParams} from 'react-router-dom';
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../images/ConnectU.svg";
import {tabData} from "./components/tabData";
import flash from "../../images/flash.svg";
import Answer from "./components/answer";


class Answers extends Component {

    constructor(props) {
        super(props);

        this.answerQuestion = this.answerQuestion.bind(this);
    }

    async componentDidMount() {
        this.setState({question: await getQuestion({id: this.props.match.params.id})});
        this.setState({user: await getSelfUser()});
    }

    state = {
        question: {
            answers: []
        },
        user: {
            name: ''
        },
        answer: '',
        tabValue: 0
    }

    async answerQuestion() {
        if (this.state.answer !== '') {
            await createAnswer({text: this.state.answer, question: this.props.match.params.id});
            window.location.reload();
        }
    }

    render() {
        return (
            <div>
                <AppBar position="static"
                        style={{background: 'white', color: '#b92b27'}}
                        elevation={0}>
                    <Toolbar style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={logo} alt='Logo' style={{width: 30, height: 30}}/>
                        <Typography variant="h6" style={{fontWeight: 'bold'}}>
                            ConnectU
                        </Typography>
                        <Tabs value={this.state.tabValue} style={{marginLeft: 50, fontWeight: 'bold'}} onChange={() => {
                        }}>
                            <Tab icon={tabData({icon: 'home', selected: 0 === this.state.tabValue})}
                                 onClick={() => this.props.history.push('/')}/>
                        </Tabs>

                        <Button variant="contained" size="large" color="primary"
                                onClick={() => {
                                }}
                                style={{borderRadius: 10, marginLeft: 300}}>
                            <img alt="Spark my career" src={flash} style={{width: 20, height: 20}}/> <span
                            style={{marginLeft: 8}}>Spark my career!</span>
                        </Button>
                    </Toolbar>
                </AppBar>

                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '35%'}}>
                        <div>
                            <div style={{
                                borderRadius: 10,
                                boxShadow: '0 5px 6px -6px #777',
                                width: '100%',
                                backgroundColor: 'white',
                                padding: 12,
                                margin: 30,
                                fontFamily: 'Raleway'
                            }}>
                                <div style={{display: 'flex', justifyContent: 'flex-start', alignContent: 'flex-end'}}>
                                    <img src={profileIcon} style={{width: 25, color: 'red', height: 25}}/>
                                    <span style={{marginTop: 3, marginLeft: 8}}>{this.state.user.name}</span>
                                </div>
                                <TextField
                                    id="outlined-size-small"
                                    label={<span
                                    >Spell your thoughts</span>}
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    margin="normal"

                                    onChange={(event) => this.setState({answer: event.target.value})}
                                />
                                <Button variant="contained" color="primary" disableElevation size="small"
                                        onClick={this.answerQuestion}>
                                    Answer Question
                                </Button>
                            </div>


                        </div>
                        {this.state.question.answers?.map((value, index) => {
                                return <Answer data={value}/>;
                            }
                        )}</div>
                </div>
            </div>
        );
    }
}


export default Answers;
