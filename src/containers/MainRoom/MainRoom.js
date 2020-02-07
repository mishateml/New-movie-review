import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Cntr from "react-bootstrap/Container";

class MainRoom extends Component {
  render() {
    return (
      <div>
        <header>logo | title | login/sin gup</header>
        <Cntr className="mx-auto">Catagories | List Of Moves | Filleter</Cntr>
        <footer>ADS</footer>
      </div>
    );
  }
}
export default MainRoom;
