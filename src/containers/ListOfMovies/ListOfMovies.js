import React, { Component } from "react";
import axios, { key, baseImgUrl } from "../../axios-data";

import classes from "./ListOfMovies.module.css";
import { Row } from "react-bootstrap";

import ListItem from "../../components/ListItem/ListItem";
import { Item } from "react-bootstrap/lib/Breadcrumb";

class ListOfMovies extends Component {
  state = {
    data: {}
  };

  mapDataArry = arr => {
    const movieList = arr.map(item => {
      return (
        <ListItem
          title={item.name}
          about={item.overview}
          poster={baseImgUrl + item.poster_path}
        />
      );
    });
    return movieList;
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
const list =null;
  componentDidMount() {
    this.getDataForLastWeek(null, key);

  }

  render() {
    return (
      <div>
        <Row className="justify-content-around">
          <ListItem
            title={item.name}
            about={item.overview}
            poster={baseImgUrl + item.poster_path}
          />
          <ListItem />
          <ListItem />
        </Row>
      </div>
    );
  }
}

export default ListOfMovies;
