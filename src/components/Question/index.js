import React from 'react'
import { Avatar, Card, CardHeader, CardContent, TextField, Button } from "@material-ui/core";
import avatar from '../../images/person.png'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    avatar:{
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    questionlabel:{
        [theme.breakpoints.down("xs")]: {
          fontSize:12
        },
      }

}))



const Question = () => {
    const classes= useStyles();
    return (
        <div>
        
                        <Card>
                    <CardHeader avatar={
          <Avatar aria-label="recipe" src={avatar} className={classes.avatar}>
            
          </Avatar>
        }
        title="John Doe"
        >

           

                    </CardHeader>
                    <CardContent>
                    <TextField
          id="outlined-size-small"
          label={<span className={classes.questionlabel}>What is your question or link?</span>}
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        />
         <Button variant="contained" color="primary" disableElevation size="small" className={classes.button}>
          Ask Question
        </Button>

                    </CardContent>
                </Card>

                     
                
              
           
        </div>
    )
}

export default Question
