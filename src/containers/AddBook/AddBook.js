import React from "react";
import { AddBookForm } from "../../components";
import { Row, Col } from "reactstrap";

const AddBook = (props) => {
    console.log(props);
  return (
    <Row>
      <Col xs={12}>
        <h3>Add a new book</h3>
      </Col>
      <Col xs={12}>
        <AddBookForm />
      </Col>
    </Row>
  );
};

export default AddBook;
