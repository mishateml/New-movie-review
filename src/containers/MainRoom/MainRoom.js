import React, { Component } from "react";
// bootstrap react
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import Header from "../../components/Header/Header";
import ListOfMovies from "../../containers/ListOfMovies/ListOfMovies";
import Pagination from "../../components/Pagination/Pagination";
class MainRoom extends Component {
  state = {
    currentPageNumber: 1
  };

  selectPaginationPage = page => {
    const pgCopy = { ...this.state };
    pgCopy.currentPageNumber = page;
    this.setState({
      ...pgCopy
    });
    console.log(`[MainRoom]state=${this.state.currentPageNumber}`);
  };
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col md={1}>Catagories</Col>
            <Col>
              <ListOfMovies page={this.state.currentPageNumber} />
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
