import React from 'react'
import { Box, Container, Grid, Avatar, Typography, IconButton } from '@material-ui/core'
import avatar from '../../images/profile.jpg'
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';
import Layout from '../../components/Layout'
import { Phone } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    
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

    root: {
        display: 'flex',
      },
    
   
 
    
    
      
     

}))

const Mentor = () => {
    const classes= useStyles()
    return (
        <div className={classes.root}>
        <Layout/>
        <Container>
            <Box
        textAlign="center"
        p="40px"
        mt="100px"
        boxShadow={2}
        
      >
          <Typography variant="h5">Our Mentors that are a best match for you.</Typography>
          <br/>
          <br/>
          <br/>
          <br/>
        
          <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                  
                      <Avatar alt="Jane Doe" className={classes.avatar} src={avatar}></Avatar>
                      <Typography variant="h6">Jane Doe</Typography>
                      <Grid container justify="center">
                          <Grid item xs={6} sm={4}>
                          <IconButton>
                          <PhoneIcon></PhoneIcon>
                      </IconButton>
                      
                          </Grid>
                          <Grid item xs={6} sm={4}>
                          <IconButton>
                          <ChatIcon></ChatIcon>
                      </IconButton>


                          </Grid>
                         
                      </Grid>
                      
                  
              </Grid>
              <Grid item xs={6} sm={4}>
                  
                      <Avatar alt="Jane Doe"  className={classes.avatar} src={avatar}></Avatar>
                      <Typography variant="h6">Jane Doe</Typography>
                      <Grid container justify="center">
                          <Grid item xs={6} sm={4}>
                          <IconButton>
                          <PhoneIcon></PhoneIcon>
                      </IconButton>
                      
                          </Grid>
                          <Grid item xs={6} sm={4}>
                          <IconButton>
                          <ChatIcon></ChatIcon>
                      </IconButton>


                          </Grid>
                          </Grid>

                  
              </Grid>
              <Grid item xs={6} sm={4}>
                  
                      <Avatar alt="Jane Doe"  className={classes.avatar} src={avatar}></Avatar>
                      <Typography variant="h6">Jane Doe</Typography>
                      <Grid container justify="center">
                          <Grid item xs={6} sm={4}>
                          <IconButton>
                          <PhoneIcon></PhoneIcon>
                      </IconButton>
                      
                          </Grid>
                          <Grid item xs={6} sm={4}>
                          <IconButton>
                          <ChatIcon></ChatIcon>
                      </IconButton>


                          </Grid>
                          </Grid>
                  
              </Grid>
          </Grid>
          </Box>


        </Container>
        </div>
       
    )
}

export default Mentor
