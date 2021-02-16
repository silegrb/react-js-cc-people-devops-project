import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Avatar from "./Avatar";

const Person = ({name,surname, email, address, faculty}) => {
    return <Container className="person">
        <Row className="d-flex w-100 justify-content-center mb-3 py-3">
            <Col xs={3} className="d-flex align-items-center">
                <Avatar name={name} surname={surname}/>
            </Col>
            <Col xs={9}>
                <Row>
                    <Col xs={12} className="name-surname d-flex align-items-center">{name} {surname}</Col>
                    <Col xs={12}>{address}</Col>
                    <Col xs={12}>{email}</Col>
                    <Col xs={12}>{faculty}</Col>
                </Row>
            </Col>

        </Row>
    </Container>
};

export default Person;