import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import Grafica from './Componentes/Grafica';
import Cards from './Componentes/Cards'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      width: 1040,
      height: 550
    }
  },
  tittle: {
    fontFamily: "Lato"
  },
  container: {
    borderRadius: 10,
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid item xs={12} sm={12}>
        <div className={classes.root}>
          <Paper elevation={5} className={classes.container}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              className='title-statistic'
            >
              <Grid container direction="row" alignItems="center" wrap="nowrap" spacing={1}>
                <Grid item>
                  <FontAwesomeIcon icon={faChartBar} size="lg" />
                </Grid>
                <h3 className={classes.tittle}>Estadisticas Coronavirus</h3>
              </Grid>
            </Grid>
            <div className="content">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={12} sm={6}>
                  <Grafica />
                  <p>informacion</p>
                </Grid>
                <Grid item xs={12} sm={5}>
                <Cards />
                </Grid>
              </Grid>
            </div>
          </Paper>
        </div>
      </Grid>
    </div>
  );
}

export default App;
