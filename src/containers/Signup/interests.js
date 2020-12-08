import React from "react";
import { Container, Button, Box, Typography, TextField, Radio, RadioGroup, FormControlLabel, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from "@material-ui/core/colors";
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



const Interests = () => {
    const classes= useStyles();
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');
    const [value4, setValue4] = React.useState('');
    const [value5, setValue5] = React.useState('');



  return (
    <Container maxWidth="sm">
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
          Choose your interests
        </Typography>
        <br/>
        <Typography variant="body2" color="primary" style={{textAlign: 'left', fontSize: 16, fontWeight: 550}}>#1 I would rather be</Typography>
        <RadioGroup aria-label="option1" name="option1" row value={value1} onChange={(e) => setValue1(e.target.value)}>
    <FormControlLabel value="auditor" control={<Radio />} label="An auditor" />
    <FormControlLabel value="lawyer" control={<Radio />} label="A lawyer" />
    </RadioGroup>

    <br/>
    <Typography variant="body2" color="primary" style={{textAlign: 'left', fontSize: 16, fontWeight: 550}}>#2 I would rather be</Typography>
        <RadioGroup aria-label="option2" name="option2" row value={value2} onChange={(e) => setValue2(e.target.value)}>
    <FormControlLabel value="professor" control={<Radio />} label="A history professor" />
    <FormControlLabel value="advertising manager" control={<Radio />} label="An advertising manager" />
    </RadioGroup>

    <br/>
    <Typography variant="body2" color="primary" style={{textAlign: 'left', fontSize: 16, fontWeight: 550}}>#3 I would rather be</Typography>
        <RadioGroup aria-label="option3" name="option3" row value={value3} onChange={(e) => setValue3(e.target.value)}>
    <FormControlLabel value="doctor" control={<Radio />} label="A doctor" />
    <FormControlLabel value="safety manager" control={<Radio />} label="A safety manager" />
    </RadioGroup>
<br/>
<Typography variant="body2" color="primary" style={{textAlign: 'left', fontSize: 16, fontWeight: 550}}>#4 I would rather be</Typography>
        <RadioGroup aria-label="option4" name="option4" row value={value4} onChange={(e) => setValue4(e.target.value)}>
    <FormControlLabel value="engineer" control={<Radio />} label="A mechanical engineer" />
    <FormControlLabel value="developer" control={<Radio />} label="A software developer" />
    </RadioGroup>
<br/>
<Typography variant="body2" color="primary" style={{textAlign: 'left', fontSize: 16, fontWeight: 550}}>#5 I would rather be</Typography>
        <RadioGroup aria-label="option5" name="option5" row value={value5} onChange={(e) => setValue5(e.target.value)}>
    <FormControlLabel value="officer" control={<Radio />} label="An elated officer" />
    <FormControlLabel value="designer" control={<Radio />} label="A designer" />
    </RadioGroup>
    







    <br/>
    <a href="/#/degree">
    <IconButton style={{float: 'left'}}>
        <ArrowBackIcon/>
    </IconButton>
    </a>
    <Button variant="contained" color="primary" disableElevation size="large" className={classes.button}>
          Signup
        </Button>
        <br/>
        <br/>

        <Typography variant="body2" color="secondary" className={classes.text}>
          Already have an account? <span style={{color: blueGrey[500]}}><a href="/#/login">Login</a></span>
        </Typography>


      </Box>
    </Container>
  );
};

export default Interests;
