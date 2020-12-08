import React, {Component} from "react";
import {Signup} from './signup';
import {Degree} from './degree';
import {Interests} from './interests';


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
        let body = {}
        if (this.state.role === 'mentor') {
            body = {
                name: this.state.username,
                password: this.state.password,
                email: this.state.email,
                mentor: {
                    degree: this.state.degree,
                    university: {
                        name: this.state.university
                    }
                },
            }
        } else {
            body = {
                name: this.state.username,
                password: this.state.password,
                email: this.state.email,
                student: {},
            }
        }
        const response = await fetch('https://api.connectu.ml/api/core/user/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        });
    }

    render() {
        if (this.state.page === 'signup') {
            return <Signup handlePage={this.handlePage} role={this.state.role}/>;
        } else if (this.state.page === 'degrees') {
            return <Degree handlePage={this.handlePage} degree={this.state.degree}/>;
        } else if (this.state.page === 'interests') {
            return <Interests handlePage={this.handlePage} login={this.login}/>;
        }
    }
}
