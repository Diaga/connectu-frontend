import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Layout from "../../components/Layout";
import avatar from "../../images/paul.jpg";
import { Button, Chip, TextField} from "@material-ui/core";
import Dialog from "../../components/Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20
  },

  card: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",


  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  chipContainer: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  
}));

export default function ComplexGrid() {
  const [show, setShow] = React.useState(false);
  const [chipDate, setChipDate] = React.useState([
    { key: 0, label: "Tue, Dec 08" },
    { key: 1, label: "Wed, Dec 09" },
    { key: 2, label: "Thu, Dec 10" },
    { key: 3, label: "Fri, Dec 11" },
    { key: 4, label: "Sat, Dec 12" },
    { key: 5, label: "Sun, Dec 13" },
  ]);
  const [chipAfternoon, setChipAfternoon] = React.useState([
    { key: 0, label: "04:15 PM" },
    { key: 1, label: "04:30 PM" },
    { key: 2, label: "04:45 PM" },
    { key: 3, label: "05:00 PM" },
    
  ]);

  const [chipEvening, setChipEvening] = React.useState([
    { key: 0, label: "06:00 PM" },
    { key: 1, label: "06:30 PM" },
    { key: 2, label: "08:00 PM" },
   
  ]);

  const showBookingModal = () => {
    console.log("click");
    setShow(true);
  };

  const closeBookingModal = () => {
    setShow(false);
  };

  const renderBookingModal = () => {
    return (
      <Dialog
      maxWidth="lg"
        open={show}
        onClose={closeBookingModal}
        dialogTitle={"Make a booking"}
      >
        <label className="key">Date</label>
        <Paper component="ul" className={classes.chipContainer}>
          {chipDate.map((data) => {
            return (
              <li key={data.key}>
                <Chip label={data.label} className={classes.chip} />
              </li>
            );
          })}
        </Paper>
        <br/>
       
        <label className="key">Afternoon</label>
        <Paper component="ul" className={classes.chipContainer}>
          {chipAfternoon.map((data) => {
            return (
              <li key={data.key}>
                <Chip label={data.label} className={classes.chip} />
              </li>
            );
          })}
        </Paper>
        <br/>

        <label className="key">Evening</label>
        <Paper component="ul" className={classes.chipContainer}>
          {chipEvening.map((data) => {
            return (
              <li key={data.key}>
                <Chip label={data.label} className={classes.chip} />
              </li>
            );
          })}
        </Paper>

        <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={4}>
            <TextField
          id="outlined-size-small"
          label="Phone Number"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"

        />
            </Grid>
            <Grid item xs={4}>
            <TextField
          id="outlined-size-small"
          label="Name"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"

        />
            </Grid>
            <Grid item xs={4}>
               
                <Button variant="contained" color="primary" disableElevation size="small" className={classes.button}>
          Book Appointment
        </Button>
               
                
                
            
            </Grid>
            
        </Grid>
       
      </Dialog>
    );
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Layout />
      <Grid
        container
        spacing={2}
        className={classes.container}
        direction="column"
      >
        <Grid item>
          <div className={classes.card}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={avatar} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Paul Adams
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec ornare laoreet odio quis commodo. Duis rhoncus
                        tempor pretium. Sed laoreet tincidunt nisl. In
                        tristique, lectus id lobortis gravida, nisi orci commodo
                        lacus, sit amet accumsan sem tellus a tortor.
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h6">$20</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">USD/hour</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          disableElevation
                          size="small"
                          onClick={showBookingModal}
                        >
                          Book me
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.card}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={avatar} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Paul Adams
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec ornare laoreet odio quis commodo. Duis rhoncus
                        tempor pretium. Sed laoreet tincidunt nisl. In
                        tristique, lectus id lobortis gravida, nisi orci commodo
                        lacus, sit amet accumsan sem tellus a tortor.
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h6">$20</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">USD/hour</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          disableElevation
                          size="small"
                        >
                          Book me
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.card}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={avatar} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Paul Adams
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec ornare laoreet odio quis commodo. Duis rhoncus
                        tempor pretium. Sed laoreet tincidunt nisl. In
                        tristique, lectus id lobortis gravida, nisi orci commodo
                        lacus, sit amet accumsan sem tellus a tortor.
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h6">$20</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">USD/hour</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          disableElevation
                          size="small"
                        >
                          Book me
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.card}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={avatar} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Paul Adams
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec ornare laoreet odio quis commodo. Duis rhoncus
                        tempor pretium. Sed laoreet tincidunt nisl. In
                        tristique, lectus id lobortis gravida, nisi orci commodo
                        lacus, sit amet accumsan sem tellus a tortor.
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h6">$20</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">USD/hour</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          disableElevation
                          size="small"
                          onClick={showBookingModal}
                        >
                          Book me
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </Grid>
      {show ? renderBookingModal() : null}
    </div>
  );
}
