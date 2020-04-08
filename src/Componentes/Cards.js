import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, withStyles, CardContent, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    height: 110,
    maxWidth: 250
  },
  title: {
    fontSize: 17,
    color: '#262626'
  },
  number: {
    textAlign: "center",
    color: '#262626'
  }
});


class Cards extends React.Component {
  render() {

    const { classes } = this.props;

    const muertes = this.props.datos.muertes;
    const confirmados = this.props.datos.confirmados;
    const recuperados =this.props.datos.recuperados;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs={12}>
          <Card className={classes.root} elevation={3}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Casos Detectados:
              </Typography>
              <Typography
                variant="h2"
                component="h3"
                className={classes.number}
              >
               {confirmados}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.root} elevation={3}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Recuperados:
              </Typography>
              <Typography
                variant="h2"
                component="h3"
                className={classes.number}
              >
                {recuperados}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.root} elevation={3}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Muertes:
              </Typography>
              <Typography
                variant="h2"
                component="h3"
                className={classes.number}
              >
                {muertes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Cards);
