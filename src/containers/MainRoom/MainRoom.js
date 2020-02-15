import React, { Component } from "react";
// bootstrap react
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import Header from "../../components/Header/Header";
import ListOfMovies from "../../containers/ListOfMovies/ListOfMovies";
import Pagination from "../../components/Pagination/Pagination";
class MainRoom extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col md={1}>Catagories</Col>
            <Col>
              <ListOfMovies />
            </Col>
            <Col md={1}>Filleter</Col>
          </Row>
          <Row>
            <Col>
              <Pagination />
            </Col>
          </Row>
        </Container>

        <footer>ADS</footer>
      </div>
    );
  }
}
export default MainRoom;
