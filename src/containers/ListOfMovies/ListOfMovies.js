import React, { Component } from "react";
import axios, { key, baseImgUrl } from "../../axios-data";

import classes from "./ListOfMovies.module.css";
import { Row, CardGroup } from "react-bootstrap";

import ListItem from "../../components/ListItem/ListItem";

class ListOfMovies extends Component {
  state = {
    data: {},
    page: 1
  };

  static getDerivedStateFromProps(props, state) {
    if (props.page !== state.page) {
      return {
        page: props.page
      };
    }
    return null;
  }
  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.getDataForLastWeek(key, this.state.page);
    }
  }

  selectOtherPage = page => {
    this.setState({
      page: page
    });
  };

  getDataForLastWeek = (key, page) => {
    axios
      .get(
        "discover/tv?api_key=" +
          key +
          "&language=en-US&sort_by=popularity.desc&page=" +
          page +
          "&timezone=America%2FNew_York&include_null_first_air_dates=false"
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
    this.getDataForLastWeek(key, this.state.page);
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
