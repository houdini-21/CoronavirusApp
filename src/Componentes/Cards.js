import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
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

export default function Cards() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      <Grid item xs={12} alignItems="flex-end">
        <Card className={classes.root} elevation={3}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              Casos Detecteados:
            </Typography>
            <Typography variant="h2" component="h3" className={classes.number}>
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
            <Typography variant="h2" component="h3" className={classes.number}>
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
            <Typography variant="h2" component="h3" className={classes.number}>
              1
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
