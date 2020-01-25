import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Lyrics from "./Lyrics";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/BLemine">
        BLemine
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/featured/?nature,song)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Song() {
  const classes = useStyles();
  const [gotten, setGotten] = useState(false);
  const [lyrics, setLyrics] = useState();
  const submit = e => {
    e.preventDefault();
    const singer = e.target.childNodes[0].lastChild.childNodes[0].value;
    const song = e.target.childNodes[1].lastChild.childNodes[0].value;
    setGotten(true);
    setLyrics(
      <React.Fragment>
        <Lyrics singer={singer} song={song} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => {
            setGotten(false);
          }}
        >
          Go Back
        </Button>
      </React.Fragment>
    );
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LibraryMusicIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Find Lyrics
          </Typography>
          {!gotten && (
            <form className={classes.form} noValidate onSubmit={submit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="singer"
                label="Singer's name"
                name="singer"
                autoComplete="singer"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="song"
                label="Song"
                id="song"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Find it
              </Button>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          )}
          {gotten && lyrics}
        </div>
      </Grid>
    </Grid>
  );
}
