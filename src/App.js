import React from "react";
import "./App.css";
import { withStyles, Paper, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import Grafica from "./Componentes/Grafica";
import Cards from "./Componentes/Cards";
import axios from "axios";
import Loading from './Componentes/Loading'

const useStyles = theme => ({
  root: {
    display: "flex",
    "& > *": {
      width: 1040,
      height: 550
    }
  },
  tittle: {
    fontFamily: "Lato",
    fontSize: 30
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
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading:true, confirmados: 0, muertes: 0, recuperados: 0 };
  }

  componentDidMount() {
    this.obtenerPost();
  }

  obtenerPost = () => {
    axios.get(`https://covid19.mathdro.id/api/countries/SV`).then(res => {
      this.setState({
        loading: false,
        confirmados: res.data.confirmed.value,
        muertes: res.data.deaths.value,
        recuperados: res.data.recovered.value
      });
    });
  };
  render() {
    const { classes } = this.props;
    const loading = this.state.loading;

    console.log(loading)
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
                className="title-statistic"
              >
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  wrap="nowrap"
                  spacing={1}
                >
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
                  {loading ? <Loading /> : <Cards datos={this.state} />}
                    
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
