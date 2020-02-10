import React from "react";
import { Card, Button } from "react-bootstrap";

const ListItem = props => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.poster} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.about}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ListItem;
