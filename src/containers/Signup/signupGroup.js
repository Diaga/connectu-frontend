import React, {Component} from "react";
import {Signup} from './signup';
import {Degree} from './degree';
import {Interests} from './interests';
import {Box, Container} from "@material-ui/core";

const {createUser, authToken} = require('../../services/user_api');


export class SignupGroup extends Component {
    constructor(props) {
        super(props)

        this.handlePage = this.handlePage.bind(this)
        this.login = this.login.bind(this)
    }

    state = {
        page: 'signup',
        username: '',
        password: '',
        email: '',
        degree: '',
        university: '',
        role: 'student'
    }

    handlePage(value) {
        this.setState(value);
    }

    async login() {
        await createUser({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            degree: this.state.degree,
            university: this.state.university,
            answer_1: '',
            answer_2: '',
            answer_3: ''
        });

        await authToken({
            email: this.state.email,
            password: this.state.password
        });

        this.props.history.push('/');
    }

    render() {
        return <section
            style={{
                backgroundImage: 'url(http://qsf.fs.quoracdn.net/-4-images.home.illo_1920.png-26-e9e6fbe02d908942.png)',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>

            <div style={{
                width: 600,
                maxWidth: '80%',
                display: 'flex',
                flexDirection: 'column',
                padding: 24,
                alignContent: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                boxShadow: '0 10px 6px -6px #777'
            }}>
                <Box
                    textAlign="center"
                    p="24px"
                    mt="50px"
                    bgcolor="white"
                    boxShadow="3"

                    style={{paddingBottom: 20}}
                >
                    {this.state.page === 'signup' ?
                        <Signup handlePage={this.handlePage} role={this.state.role}/>
                        : this.state.page === 'degrees' ?
                            <Degree handlePage={this.handlePage} degree={this.state.degree} login={this.login}/>
                            : this.state.page === 'interests' ?
                                <Interests handlePage={this.handlePage} login={this.login}/> : Container()}
                </Box>
            </div>
        </section>

    }
}
