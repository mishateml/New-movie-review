import React, { Component } from "react";
// bootstrap react
import Button from "react-bootstrap/Button";
import axios, { key } from "../../axios-data";

import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import Header from "../../components/Header/Header";
import ListOfMovies from "../../containers/ListOfMovies/ListOfMovies";
import Pagination from "../../components/Pagination/Pagination";
import Catagories from "../../components/Catagories/Catagories";
class MainRoom extends Component {
  state = {
    currentPageNumber: 1,
    catagories: [],
    selectedCatagories: []
  };
  getCatData = (axios, key) => {
    axios
      .get("genre/movie/list?api_key=" + key + "&language=en-US")
      .then(response => {
        let arr = [];
        const res = response.data.genres;
        for (let i in res) {
          arr.push(res[i]);
        }

        this.setState({ catagories: arr });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  componentDidMount() {
    this.getCatData(axios, key);
  }

  selectPaginationPage = page => {
    const pgCopy = { ...this.state };
    pgCopy.currentPageNumber = page;
    this.setState({
      ...pgCopy
    });
  };

  selectedCatagoriesHandler = arrOfCat => {
    this.setState({
      selectedCatagories: arrOfCat
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col md={2}>
              <Catagories
                cat={this.state.catagories}
                selected={this.selectedCatagoriesHandler}
              />
            </Col>
            <Col>
              <ListOfMovies
                page={this.state.currentPageNumber}
                cat={this.state.selectedCatagories}
              />
            </Col>
            <Col md={1}>Filleter</Col>
          </Row>
          <Row>
            <Col>
              <Pagination
                currentPageNum={this.state.currentPageNumber}
                click={page => {
                  this.selectPaginationPage(page);
                }}
              />
            </Col>
          </Row>
        </Container>

        <footer>ADS</footer>
      </div>
    );
  }
}
export default MainRoom;
