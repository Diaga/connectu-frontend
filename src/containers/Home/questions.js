import React, {Component} from "react";
import Question from './components/question';

import {createQuestion, getQuestions} from "../../services/forum_api";
import {getSelfUser} from "../../services/user_api";

import {Button, TextField} from "@material-ui/core";
import profileIcon from "../../images/profile-photo-icon-red.svg";

class Questions extends Component {

    constructor(props) {
        super(props);

        this.askQuestion = this.askQuestion.bind(this);
    }

    async componentDidMount() {
        this.setState({questions: await getQuestions()});
        this.setState({user: await getSelfUser()});
    }

    state = {
        questions: [],
        user: {
            name: ''
        },
        question: ''
    }

    async askQuestion() {
        if (this.state.question !== '') {
            await createQuestion({text: this.state.question});
            window.location.reload();
        }
    }

    render() {
        return (
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
                                >What is your question or link?</span>}
                                variant="outlined"
                                size="small"
                                fullWidth
                                margin="normal"

                                onChange={(event) => this.setState({question: event.target.value})}
                            />
                            <Button variant="contained" color="primary" disableElevation size="small"
                                    onClick={this.askQuestion}>
                                Ask Question
                            </Button>
                        </div>


                    </div>
                    {this.state.questions.map((value, index) => {
                            return <Question data={value}/>;
                        }
                    )}</div>
            </div>
        );
    }
}


export default Questions;
