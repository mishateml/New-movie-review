import React, { Component } from "react";
import axios, { key, baseImgUrl } from "../../axios-data";

import classes from "./ListOfMovies.module.css";
import { Row, CardGroup } from "react-bootstrap";

import ListItem from "../../components/ListItem/ListItem";

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
        this.mapDataArry(this.state.data, null);
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

  mapDataArry = obj => {
    let dataArr = [];
    for (let item in obj) {
      dataArr.push(obj[item]);
    }
    let mappedArr;

    mappedArr = dataArr.map(item => {
      return (
        <ListItem
          key={item.id}
          title={item.name}
          about={item.overview}
          poster={baseImgUrl + item.poster_path}
        />
      );
    });
    return mappedArr;
  };
  render() {
    let dataListToPrasent = [];
    dataListToPrasent = this.mapDataArry(this.state.data, null);

    return (
      <div>
        <Row className="justify-content-around">
          <CardGroup>{dataListToPrasent.map(item => item)}</CardGroup>
        </Row>
      </div>
    );
  }
}

export default ListOfMovies;
