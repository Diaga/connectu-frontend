import React, {Component} from "react";
import {
    Container,
    Button,
    Box,
    Typography,
    IconButton
} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
    },


});


export class Interests extends Component {


    render() {
        const classes = this.props;
        return (

            <div>

                <Typography variant="h3" color="primary" className={classes.heading}

                >
                    Signup
                </Typography>
                <br/>
                <Typography variant="body1" color="secondary" className={classes.subheading}>
                    We would like to know you better
                </Typography>
                <br/>

                <br/>

                <div style={
                    {display: 'flex', justifyContent: 'space-evenly'}
                }>
                    <Button variant="contained" size="large"
                            className={classes.button} onClick={() => this.props.handlePage({page: 'signup'})}>
                        <ArrowBackIcon/> <span style={{marginLeft: 5}}>Back</span>
                    </Button>

                    <Button variant="contained" color="primary" size="large"
                            className={classes.button} onClick={() => this.props.login()}>
                        Signup
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles, {withTheme: true})(Interests);
