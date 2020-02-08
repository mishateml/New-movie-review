import React, { Component } from "react";
import axios, { key } from "../../axios-data";
import classes from "./ListOfMovies.module.css";

class ListOfMovies extends Component {
  state = {
    data: {}
  };
  getDataForLastWeek = (filter, key) => {
    axios
      .get(
        "discover/tv?api_key=" +
          key +
          "&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"
      )
      .then(response => {
        // handle success
        this.setState({
          data: response.data.results
        });
        console.log(this.state.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };

  componentDidMount() {
    this.getDataForLastWeek(null, key);
  }

  render() {
    return <div></div>;
  }
}

export default ListOfMovies;
