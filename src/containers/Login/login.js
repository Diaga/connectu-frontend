import React from "react";
import { Container, Box, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from "@material-ui/core/colors";


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
        fontWeight: 700,
      
    }
    

}))



const Login = () => {
    const classes= useStyles();
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
          Login
        </Typography>
        <br/>
        <Typography variant="body1" color="secondary" className={classes.subheading}>
          Sign in to your account
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
          defaultValue="Password"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        />
        <br/>
        <br/>
        <Button variant="contained" color="primary" disableElevation size="large" className={classes.button}>
          Login
        </Button>
        <br/>
        <br/>
        <Typography variant="body2" color="secondary" className={classes.text}>
          Don't have an account? <span style={{color: blueGrey[500]}}><a href="/signup">Signup</a></span>
        </Typography>


      </Box>
    </Container>
  );
};

export default Login;
