import React from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { Card, withStyles, CardContent, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    height: 110,
    maxWidth: 250
  },
  title: {
    fontSize: 17
  },
  number: {
    textAlign: "center"
  }
});


class Cards extends React.Component {
  render() {
   
    const { classes } = this.props;
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
                30
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
                0
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
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Cards);
