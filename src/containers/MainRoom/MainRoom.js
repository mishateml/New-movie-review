import React, { Component } from "react";
// bootstrap react
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Header from "../../components/Header/Header";

class MainRoom extends Component {
  render() {
    return (
      <div>
        <Header />
        <p> Catagories | List Of Moves | Filleter</p>
        <footer>ADS</footer>
      </div>
    );
  }
}
export default MainRoom;
