import React from 'react'
import Layout from '../../components/Layout'
import { Typography, Avatar, Paper, Radio, Grid, RadioGroup, FormControlLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Question from '../../components/Question'
import Answer from '../../components/Answer'
import avatar from '../../images/avatar.jpg'


const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        width: '80%',
        padding: theme.spacing(3),
      },
      root: {
        display: 'flex',
      },
      sidebar:{
        width: '20%',
        padding: theme.spacing(3)
      },
      avatar:{
        display:'block',
        margin:'0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),
        overflow: 'hidden',
        [theme.breakpoints.down("xs")]: {
            width: theme.spacing(9),
          height: theme.spacing(9),
          },

    },
    radiolabels:{
      [theme.breakpoints.down("xs")]: {
        fontSize:14
      },
    }

   
 
    
    
      
     

}))



const Home = (props) => {
    
    const classes= useStyles();

    const handleOptionChange = (e) => {
      if(e.target.value == 'student'){
        props.history.push('/mentors')
      }
      else if(e.target.value == 'professional'){
        props.history.push('/')
      }
    }
    const [value, setValue] = React.useState('');
    return (
        <>
         <div className={classes.root}>
        <Layout/>
        

        <Grid container spacing={2} style={{marginTop: '10px'}}>
            <Grid item sm={10} xs={7}>
                <Grid container style={{marginLeft: '10px'}}>
                    <Grid item container direction="column" spacing={2}>
                        <Grid item>
                        <div className={classes.toolbar}></div>
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
            <div className={classes.toolbar}></div>
            <Paper className={classes.paper}>

<Typography variant="h6" color="primary" style={{textAlign: 'center'}}>Find a mentor</Typography>
<Avatar className={classes.avatar} src={avatar} alt="John Doe"></Avatar>

<RadioGroup aria-label="mentor" name="mentor" style={{marginLeft: 10 }}value={value} onChange={(e) => { setValue(e.target.value)}}>
<FormControlLabel className={classes.radiolabels} value="professional" control={<Radio />} label={<span className={classes.radiolabels}>Professional</span>} />
<FormControlLabel className={classes.radiolabels} value="student" control={<Radio />} onChange={handleOptionChange} label={<span className={classes.radiolabels}>Student</span>} /> 
</RadioGroup>
</Paper>
            </Grid>
        </Grid>
        
        
        
        
  
     
      
      
      </div>
        </>
        

        
      
    

        
    )
}

export default Home
