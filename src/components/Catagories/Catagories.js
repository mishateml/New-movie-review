import React, { Component } from "react";
import axios, { key } from "../../axios-data";
import { Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const catagories = props => {
  let arr = props.cat.map(i => {
    return (
      <ToggleButton variant="outline-dark" key={i.id} value={i.id}>
        {i.name}
      </ToggleButton>
    );
  });

  return (
    <Container className="mt-3 ">
      <ToggleButtonGroup
        type="checkbox"
        name="cat"
        vertical
        onChange={props.selected}
      >
        {arr}
      </ToggleButtonGroup>
    </Container>
  );
};
export default catagories;
