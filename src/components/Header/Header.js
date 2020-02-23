import React from "react";
// bootstrap

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";

import Image from "react-bootstrap/Image";

import logo from "../../data/img/logo/logo.png";

import classes from "./Header.module.css";

const header = props => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Image className={classes.Logo} src={logo} roundedCircle />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <h3>Explore All New Releases </h3>
      </Nav>
      {/* <Button className="mr-2" variant="outline-success">
        Log In
      </Button>
      <Button variant="outline-success">Singh in</Button> */}
    </Navbar>
  );
};

export default header;
