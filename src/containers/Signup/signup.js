import React, {Component} from "react";
import {
    Container,
    Box,
    Typography,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    IconButton, Button
} from "@material-ui/core";
import {withStyles} from "@material-ui/core";
import {blueGrey} from "@material-ui/core/colors";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const useStyles = (theme) => ({
    heading: {
        fontWeight: 700,
        fontSize: 36
    },
    subheading: {
        fontWeight: 500
    },
    button: {
        width: '40%'
    },
    text: {
        fontWeight: 700
    }


});


export class Signup extends Component {

    render() {
        const classes = this.props;

        return (
            <div>
                <Typography variant="h3" color="primary" className={classes.heading} id="product-sans">
                    Sign Up
                </Typography>
                <br/>
                <Typography variant="body1" color="secondary" className={classes.subheading}>
                    Create your account
                </Typography>
                <br/>

                <TextField
                    id="outlined-size-small"
                    label="Username"
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="normal"

                    onChange={(event) => this.props.handlePage({username: event.target.value})}
                />
                <TextField
                    id="outlined-size-small"
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="normal"

                    onChange={(event) => this.props.handlePage({email: event.target.value})}
                />
                <TextField

                    id="outlined-size-small"
                    label="Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="normal"

                    onChange={(event) => this.props.handlePage({password: event.target.value})}
                />
                <Typography variant="body2" color="primary"
                            style={{textAlign: 'left', fontSize: 16, fontWeight: 550}}>You wish to sign up
                    as:</Typography>
                <RadioGroup aria-label="role" name="role" row value={this.props.role}
                            onChange={(event, value) => this.props.handlePage({role: event.target.value})}>
                    <FormControlLabel value="student" control={<Radio/>} label="Student"/>
                    <FormControlLabel value="mentor" control={<Radio/>} label="Mentor"/>
                </RadioGroup>


                <div>
                    <Button variant="contained" size="large"
                            className={classes.button} style={{marginTop: 20}} onClick={() => {
                        if (this.props.role === 'student') {
                            this.props.handlePage({page: 'interests'});
                        } else if (this.props.role === 'mentor') {
                            this.props.handlePage({page: 'degrees'});
                        }
                    }}>
                        <span style={{marginRight: 5, fontSize: 14}}>Next</span> <ArrowForwardIcon/>
                    </Button>
                </div>

                <div style={{marginTop: 20}}>
                    <Typography variant="body2" color="secondary" className={classes.text}>
                        Already have an account? <span style={{color: blueGrey[500]}}><a
                        href="/#/login">Login</a></span>
                    </Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, {withTheme: true})(Signup);
