import React from "react";
import "./App.css";
import { withStyles, Paper, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import Grafica from "./Componentes/Grafica";
import Cards from "./Componentes/Cards";
import axios from "axios";
import Loading from "./Componentes/Loading";
import SearchBar from 'material-ui-search-bar-enhanced';

const useStyles = (theme) => ({
  root: {
    display: "flex",
    "& > *": {
      width: 1040,
      height: 550,
    },
  },
  tittle: {
    fontFamily: "Lato",
    fontSize: 30,
    color: "#262626",
  },
  container: {
    borderRadius: 10,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: [] };
  }

  componentDidMount() {
    this.obtenerPost();
  }

  obtenerPost = () => {
    var today = new Date();
    var dd = String(today.getDate() - 1).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    axios
      .get(
        `https://api.covid19api.com/live/country/el-salvador/status/confirmed/date/${today}T13:13:30Z`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          loading: false,
          data: res.data[0],
        });
      });
  };
  render() {
    const { classes } = this.props;
    const loading = this.state.loading;
    console.log(loading);
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
                  <SearchBar
                    onChange={() => console.log("onChange")}
                    onRequestSearch={() => console.log("onRequestSearch")}
                    onClear={() => console.log("onClear")}
                    style={{
                      margin: "0 auto",
                      maxWidth: 800,
                    }}
                  />
                  <Grid item xs={12} sm={6}>
                    {loading ? <Loading /> : <Grafica data={this.state} />}
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
