import React, {Component} from "react";
import {Box, Typography, TextField, Button} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import {blueGrey} from "@material-ui/core/colors";


import {authToken, isUserLoggedIn} from '../../services/user_api';

const useStyles = (theme) => ({
    heading: {
        fontSize: 36
    },
    subheading: {
        fontWeight: 500
    },
    button: {
        width: '40%'
    },
    text: {}
});


class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    async login() {
        try {
            await authToken({email: this.state.email, password: this.state.password});

            this.props.history.push('/#/');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const classes = this.props;
        if (isUserLoggedIn()) {
            this.props.history.push('/#/');
        }
        return (
            <section
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
                    >
                        <Typography variant="h3" color="primary" className={classes.heading} id="product-sans">
                            Login
                        </Typography>
                        <br/>
                        <Typography variant="body1" color="secondary" className={classes.subheading}>
                            Sign in to your account
                        </Typography>
                        <br/>

                        <TextField
                            id="outlined-size-small"
                            label="Email"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="normal"

                            onChange={(event) => this.setState({email: event.target.value})}
                        />
                        <TextField

                            id="outlined-size-small"
                            label="Password"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="normal"

                            onChange={(event) => this.setState({password: event.target.value})}
                        />
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" disableElevation size="large"
                                className={classes.button} onClick={() => this.login()}>
                            Login
                        </Button>
                        <br/>
                        <br/>
                        <Typography variant="body2" color="secondary" className={classes.text}>
                            Don't have an account? <span style={{color: blueGrey[500]}}><a
                            href="/#/signup">Signup</a></span>
                        </Typography>


                    </Box>
                </div>
            </section>
        );
    }
}


export default withStyles(useStyles, {withTheme: true})(Login);
