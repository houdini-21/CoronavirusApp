import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "../Recursos/Searchbar.css";

const styles = (theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class SearchBar extends React.Component {
  busquedaRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();

    const termino = this.busquedaRef.current.value;
    this.props.datosBusqueda(termino);
  };
  render() {
    const { classes } = this.props;

    return (
      <Paper
        component="form"
        className={classes.root}
        onSubmit={this.obtenerDatos}
      >
        <input
          ref={this.busquedaRef}
          className="search-bar"
          placeholder="Buscador de Pais"
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}
export default withStyles(styles)(SearchBar);
