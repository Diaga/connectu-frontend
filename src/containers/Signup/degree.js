import React from "react";
import { Container, Grid, Box, Typography, TextField, Radio, RadioGroup, FormControlLabel, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from "@material-ui/core/colors";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
    },
  

}))



const Degree = () => {
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
          Signup
        </Typography>
        <br/>
        <Typography variant="body1" color="secondary" className={classes.subheading}>
          Enter your degree details.
        </Typography>
        <br/>
        
        <TextField
          id="outlined-size-small"
          defaultValue="University Name"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        
        />
        <TextField
          id="outlined-size-small"
          defaultValue="Degree Major"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        
        />
        <Grid container spacing={3}>
            <Grid item xs={6}>
            <TextField
          id="outlined-size-small"
          defaultValue="Batch"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        
        />
            </Grid>
            <Grid item xs={6}>
            <TextField
          id="outlined-size-small"
          defaultValue="Semester"
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
          defaultValue="CGPA"
          variant="outlined"
          size="small"
          margin="normal"
        
        />

        </div>
        <a href="/signup">
    <IconButton style={{float: 'left'}}>
        <ArrowBackIcon/>
    </IconButton>

    </a>
        
        

    <a href="/interests">
    <IconButton style={{float: 'right'}}>
        <ArrowForwardIcon/>
    </IconButton>

    </a>
    <br/>

        
        <Typography variant="body2" color="secondary" className={classes.text}>
          Already have an account? <span style={{color: blueGrey[500]}}><a href="/login">Login</a></span>
        </Typography>


      </Box>
    </Container>
  );
};

export default Degree;
