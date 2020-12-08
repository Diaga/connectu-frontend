import React, {Component} from "react";
import Popup from 'reactjs-popup';
import Layout from "../../components/Layout";
import {
    Typography,
    Avatar,
    Paper,
    Radio,
    Grid,
    RadioGroup,
    FormControlLabel,
    Button,
    Link,
    Divider

} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import Question from "../../components/Question";
import Answer from "../../components/Answer";
import avatar from "../../images/avatar.jpg";

import {isUserLoggedIn} from "../../services/user_api";

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
            this.props.history.push("/#/mentors");
        } else if (e.target.value === "professional") {
            this.props.history.push("/#/professionals");
        }
    };

    render() {
        const classes = this.props;

        if (!isUserLoggedIn()) {
            this.props.history.push('/#/login');
        }
        return (
            <>
                <div className={classes.root}>
                    <Layout/>

                    <Grid container spacing={2} style={{marginTop: "10px"}}>
                        <Grid item sm={10} xs={7}>
                            <Grid container style={{marginLeft: "10px"}}>
                                <Grid item container direction="column" spacing={2}>
                                    <Grid item>
                                        <div className={classes.toolbar}/>
                                        <Question/>
                                    </Grid>
                                    <Grid item>
                                        <Answer/>
                                    </Grid>
                                    <Grid item>
                                        <Answer/>
                                    </Grid>
                                    <Grid item>
                                        <Answer/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item sm={2} xs={5}>
                            <div className={classes.toolbar}/>
                            <Paper className={classes.paper}>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    style={{textAlign: "center"}}
                                >
                                    Find a mentor
                                </Typography>
                                <Avatar
                                    className={classes.avatar}
                                    src={avatar}
                                    alt="John Doe"
                                ></Avatar>

                                <RadioGroup
                                    aria-label="mentor"
                                    name="mentor"
                                    style={{marginLeft: 10}}
                                    value="value"
                                    onChange={(e) => {
                                    }}
                                >
                                    <FormControlLabel
                                        className={classes.radiolabels}
                                        value="professional"
                                        control={<Radio/>}
                                        onChange={this.handleOptionChange}

                                        label={
                                            <span className={classes.radiolabels}>Professional</span>
                                        }
                                    />
                                    <FormControlLabel
                                        className={classes.radiolabels}
                                        value="student"
                                        control={<Radio/>}
                                        onChange={this.handleOptionChange}
                                        label={<span className={classes.radiolabels}>Student</span>}
                                    />
                                </RadioGroup>
                                <Button variant="contained" color="primary" disableElevation size="small"
                                        className={classes.button} style={{marginLeft: "5vw", marginBottom: "2vh"}}>
                                    FIND
                                </Button>
                            </Paper>
                            <Paper className={classes.paper} style={{marginTop: "3vh"}}>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    style={{textAlign: "center"}}
                                >
                                    Find university details
                                </Typography>
                                <Popup
                                    trigger={<Button variant="contained" color="primary" disableElevation size="small"
                                                     className={classes.button}
                                                     style={{marginLeft: "5vw", marginBottom: "2vh"}}>
                                        FIND
                                    </Button>}
                                    position="middle center">
                                    <div>
                                        <Grid container
                                              justify="center"
                                              alignItems="center"
                                        >
                                            <Paper style={{
                                                marginRight: "85vw",
                                                width: "50vw",
                                                marginBottom: "35vh",
                                                padding: "3vw"
                                            }}>
                                                <div>
                                                    <Typography variant="h7" style={{color: '#0E4462'}}>
                                                        NUST
                                                    </Typography>
                                                    <div>
                                                        Visit the website
                                                        <Link href=""> here. </Link>
                                                    </div>
                                                    <div>
                                                        <Typography variant="h8"> Degrees Offered: </Typography>
                                                        BS Computer Science, BS Mechanical Engineering, BS Civil
                                                        Engineering, BS Psychology, BBA, BS Architecture, BS Electrical
                                                        Engineering
                                                    </div>
                                                </div>
                                                <div>
                                                    <Divider></Divider>
                                                    <Typography variant="h7" style={{color: '#0E4462'}}>
                                                        FAST
                                                    </Typography>
                                                    <div>
                                                        Visit the website
                                                        <Link href=""> here. </Link>
                                                    </div>
                                                    <div>
                                                        <Typography variant="h8"> Degrees Offered: </Typography>
                                                        BS Computer Science, BS Mechanical Engineering, BS Civil
                                                        Engineering, BS Psychology, BBA, BS Architecture, BS Electrical
                                                        Engineering
                                                    </div>
                                                </div>
                                                <div>
                                                    <Divider/>
                                                    <Typography variant="h7" style={{color: '#0E4462'}}>
                                                        COMSATS
                                                    </Typography>
                                                    <div>
                                                        Visit the website
                                                        <Link href=""> here. </Link>
                                                    </div>
                                                    <div>
                                                        <Typography variant="h8"> Degrees Offered: </Typography>
                                                        BS Computer Science, BS Mechanical Engineering, BS Civil
                                                        Engineering, BS Psychology, BBA, BS Architecture, BS Electrical
                                                        Engineering
                                                    </div>
                                                </div>
                                                <div>
                                                    <Divider/>
                                                    <Typography variant="h7" style={{color: '#0E4462'}}>
                                                        LUMS
                                                    </Typography>
                                                    <div>
                                                        Visit the website
                                                        <Link href=""> here. </Link>
                                                    </div>
                                                    <div>
                                                        <Typography variant="h8"> Degrees Offered: </Typography>
                                                        BS Computer Science, BS Mechanical Engineering, BS Civil
                                                        Engineering, BS Psychology, BBA, BS Architecture, BS Electrical
                                                        Engineering
                                                    </div>
                                                </div>
                                            </Paper>
                                        </Grid>
                                    </div>
                                </Popup>
                            </Paper>
                        </Grid>
                    </Grid>

                </div>


            </>
        );
    }
}

export default withStyles(useStyles, {withTheme: true})(Home);
