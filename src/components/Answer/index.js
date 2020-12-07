import React from 'react'
import { Avatar,Typography, Card, CardHeader, CardContent, CardActions, IconButton } from "@material-ui/core";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import  ShareIcon from '@material-ui/icons/Share';
import avatar from '../../images/person.png'
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';



const useStyles = makeStyles((theme) => ({
    avatar:{
        width: theme.spacing(3),
        height: theme.spacing(3)
    }

}))



const Answer = () => {
    const classes= useStyles();
    return (
        <div>
        
                
                        <Card>
                    <CardHeader avatar={
          <Avatar aria-label="recipe" src={avatar} className={classes.avatar}>
            
          </Avatar>
        }
        title="Jane Doe"
        subheader="Recommended answers">

           

                    </CardHeader>
                    <CardContent>
                    <Typography variant="body1" color="textPrimary">What is the difference between CS and SE?</Typography>
                        <Typography variant="body2" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare laoreet odio quis commodo. Duis rhoncus tempor pretium. Sed laoreet tincidunt nisl. In tristique, lectus id lobortis gravida, nisi orci commodo lacus, sit amet accumsan sem tellus a tortor.</Typography>

      
                    </CardContent>
                    <CardActions disableSpacing>
        <IconButton aria-label="thumbs up">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="thumbs down">
          <ThumbDownIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
             </CardActions>
             </Card>

                        
                    

                    
                    
                
              
           
        </div>
    )
}

export default Answer
