import React from "react";
import axios, { key } from "../../axios-data";
import { Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const catagories = props => {
  // axios
  //   .get("genre/movie/list?api_key=" + key + "&language=en-US")
  //   .then(response => {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function(error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function() {
  //     // always executed
  //   });

  return (
    <Container className="mt-3 ">
      <ToggleButtonGroup type="checkbox" name="cat" vertical>
        <ToggleButton value={1}>qwe</ToggleButton>
        <ToggleButton value={2}>qwe</ToggleButton>
        <ToggleButton value={3}>qwe</ToggleButton>
        <ToggleButton value={4}>qwe</ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
};
export default catagories;
