import React, {Component} from "react";
import {
    Container,
    Box,
    Typography,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    IconButton
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
            <Container maxWidth="xs">
                <Box
                    textAlign="center"
                    p="24px"
                    mt="50px"
                    bgcolor="white"
                    boxShadow="3"
                >

                    <Typography variant="h3" color="primary" className={classes.heading}>
                        Signup
                    </Typography>
                    <br/>
                    <Typography variant="body1" color="secondary" className={classes.subheading}>
                        Signup your account
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


                    <IconButton style={{float: 'right'}} onClick={() => this.props.handlePage({page: 'degrees'})}>
                        <ArrowForwardIcon/>
                    </IconButton>
                    <br/>


                    <Typography variant="body2" color="secondary" className={classes.text}>
                        Already have an account? <span style={{color: blueGrey[500]}}><a
                        href="/#/login">Login</a></span>
                    </Typography>


                </Box>
            </Container>
        );
    }
};

export default withStyles(useStyles, {withTheme: true})(Signup);
