import React from "react";
import { Pagination } from "react-bootstrap";

const pagination = props => {
  let active;
  let items = [];
  let numOfPages = 50;

  active = props.active;

  for (let number = 1; number <= numOfPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          props.click(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default pagination;
