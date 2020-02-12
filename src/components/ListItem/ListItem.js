import React from "react";

import classes from "./ListItem.module.css";

import { Card, Button, Accordion, ButtonGroup } from "react-bootstrap";

const ListItem = props => {
  return (
    <div className={classes.CardInList}>
      <Accordion>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.poster} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Accordion.Collapse eventKey="0">
              <div>
                <Card.Text>{props.about}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </div>
            </Accordion.Collapse>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              More
            </Accordion.Toggle>
          </Card.Body>
        </Card>
      </Accordion>
    </div>
  );
};
export default ListItem;
