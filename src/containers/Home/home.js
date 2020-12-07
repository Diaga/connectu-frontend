import React from 'react'
import Layout from '../../components/Layout'
import { Typography, Avatar, Paper, Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
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
   
    
    
      
     

}))



const Home = () => {
    
    const classes= useStyles();
    const [value, setValue] = React.useState('');
    return (
        <>
         <div className={classes.root}>
        <Layout/>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Question/>
        <Answer/>
        <Answer/>
        <Answer/>
      </main>
     
      <aside className={classes.sidebar}>
      <div className={classes.toolbar} />
        <Paper className={classes.paper}>

          <Typography variant="h6" color="primary" style={{textAlign: 'center'}}>Find a mentor</Typography>
          <Avatar className={classes.avatar} src={avatar} alt="John Doe"></Avatar>

          <RadioGroup aria-label="role" name="role" style={{marginLeft: 10 }}value={value} onChange={(e) => { setValue(e.target.value)}}>
    <FormControlLabel value="student" control={<Radio />} label="Student" />
    <FormControlLabel value="mentor" control={<Radio />} label="Mentor" />
    </RadioGroup>
        </Paper>
      </aside>

      
      </div>
        </>
        

        
      
    

        
    )
}

export default Home
