import React, {Component} from "react";
import {
    Container,
    Button,
    Box,
    Typography,
    IconButton
} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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

            <Container maxWidth="sm">
                <Box
                    textAlign="center"
                    p="24px"
                    mt="50px"
                    bgcolor="white"
                    boxShadow="3"
                >

                    <Typography variant="h3" color="primary" className={classes.heading}

                    >
                        Signup
                    </Typography>
                    <br/>
                    <Typography variant="body1" color="secondary" className={classes.subheading}>
                        Tell a little about yourself
                    </Typography>
                    <br/>

                    <br/>

                    <IconButton style={{float: 'left'}} onClick={() => this.props.handlePage({page: 'degrees'})}>
                        <ArrowBackIcon/>
                    </IconButton>

                    <Button variant="contained" color="primary" disableElevation size="large"
                            className={classes.button} onClick={() => this.props.login()}>
                        Signup
                    </Button>
                    <br/>
                    <br/>

                </Box>
            </Container>
        );
    }
}

export default withStyles(useStyles, {withTheme: true})(Interests);
