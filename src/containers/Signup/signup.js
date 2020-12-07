import React from "react";
import { Container, Box, Typography, TextField, Radio, RadioGroup, FormControlLabel, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from "@material-ui/core/colors";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const useStyles = makeStyles((theme) => ({
    heading:{
        fontWeight: 700,
        fontSize: 36
    },
    subheading:{
        fontWeight: 500
    },
    button:{
        width: '40%'
    },
    text:{
        fontWeight: 700
    }


}))



const Signup = () => {
    const classes= useStyles();
    const [value, setValue] = React.useState('student');

    const handleChange = (event) => {

      setValue(event.target.value);


    };
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
          defaultValue="Username"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"

        />
        <TextField
          id="outlined-size-small"
          defaultValue="Email"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"

        />
        <TextField

          id="outlined-size-small"
          defaultValue="Password"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        />
        <Typography variant="body2" color="primary" style={{textAlign: 'left', fontSize: 16, fontWeight: 550}}>You wish to sign up as:</Typography>
        <RadioGroup aria-label="role" name="role" row value={value} onChange={handleChange}>
    <FormControlLabel value="student" control={<Radio />} label="Student" />
    <FormControlLabel value="mentor" control={<Radio />} label="Mentor" />
    </RadioGroup>


    <a href="/#/degree">
    <IconButton style={{float: 'right'}}>
        <ArrowForwardIcon/>
    </IconButton>

    </a>

    <br/>


        <Typography variant="body2" color="secondary" className={classes.text}>
          Already have an account? <span style={{color: blueGrey[500]}}><a href="/#/login">Login</a></span>
        </Typography>


      </Box>
    </Container>
  );
};

export default Signup;
