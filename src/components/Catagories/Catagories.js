import React from "react";

import { Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const catagories = props => {
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
