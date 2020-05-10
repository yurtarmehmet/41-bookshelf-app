import React from 'react';
import { Nav, Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import {connect} from "react-redux";
import {StyledNavbarText} from "./FilterSortBarStyles";
import {categories} from "../../constants";
import {setFilter, searchBooks} from "../../state/ducks/books/action";

const FilterSortBar = (props) => {
    return (
        <div>
                <Container fluid className="bg-white" style={{padding: "15px"}}>
                    <Row>
                        <Col xs={6}>
                            <Nav className="bg-white">
                                <StyledNavbarText><strong>Categories:</strong></StyledNavbarText>
                                <StyledNavbarText active={!props.activeFilter} onClick={() => {
                                    props.changeFilter("");
                                }}>All</StyledNavbarText>
                                {
                                    categories.map((category) => {
                                        return <StyledNavbarText active={props.activeFilter === category} onClick={() => {
                                            props.changeFilter(category);
                                        }}>{category}</StyledNavbarText>
                                    })
                                }
                            </Nav>
                        </Col>

                        <Col xs={6}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Search by name</InputGroupText>
                                </InputGroupAddon>
                                <Input onChange={(e) => {
                                    //e.target.value
                                    props.search(e.target.value)
                                }}/>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        activeFilter: state.books.filter
    }
};

const mapDispatchToProps = {
  changeFilter: setFilter,
  search: searchBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSortBar);