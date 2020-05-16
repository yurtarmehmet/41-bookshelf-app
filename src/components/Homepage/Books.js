import React from 'react';
import Book from "./Book";
import {Col, Row} from "reactstrap";

const Books = (props) => {
    return (
        <Row>
            {
                props.items.map((item) => {
                    return <Col xs={props.view === "cards" ? 3 : 12}>
                        <Book {...item} />
                    </Col>
                })
            }
        </Row>
    );
};

export default Books;