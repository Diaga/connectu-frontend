import React, {Component} from "react";
import {
    Grid,
    Typography,
    TextField,
    FormControl, InputLabel, Select, MenuItem, Button
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
    }
});


export class Degree extends Component {

    state = {
        degrees: []
    }

    async componentDidMount() {
        const response = await fetch('https://api.connectu.ml/api/core/degree/',
            {headers: {"Content-Type": "application/json"}});
        const data = await response.json();
        this.setState({degrees: data});
    }

    render() {
        const classes = this.props;

        return (
            <div>

                <Typography variant="h3" color="primary" className={classes.heading}>
                    Signup
                </Typography>
                <br/>
                <Typography variant="body1" color="secondary" className={classes.subheading}>
                    Enter your degree details.
                </Typography>
                <br/>

                <TextField
                    id="outlined-size-small"
                    label="University Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="normal"

                    onChange={(event) => this.props.handlePage({university: event.target.value})}
                />
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="degree">Degree</InputLabel>
                    <Select
                        labelId="degree"
                        id="degree-select"
                        value={this.props.degree}
                        onChange={(event, child) => this.props.handlePage({degree: event.target.value})}
                    >
                        {this.state.degrees.map((value, index) => {
                            return <MenuItem value={value.id}>{value.name}</MenuItem>;
                        })}
                    </Select>
                </FormControl>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-size-small"
                            label="Batch"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="normal"

                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-size-small"
                            label="Semester"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="normal"

                        />
                    </Grid>
                </Grid>
                <div style={{textAlign: 'left'}}>
                    <TextField
                        id="outlined-size-small"
                        label="CGPA"
                        variant="outlined"
                        size="small"
                        margin="normal"

                    />

                </div>

                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: 20}}>
                    <Button variant="contained" size="large"
                            className={classes.button} onClick={() => this.props.handlePage({page: 'signup'})}>
                        <ArrowBackIcon /> <span style={{marginLeft: 5}}>Back</span>
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

export default withStyles(useStyles, {withTheme: true})(Degree);
