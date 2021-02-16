import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Avatar from "./Avatar";

const Person = ({name,surname, email, address, faculty, facebookLink}) => {
    return <Container className="person">
        <a href={facebookLink || 'https://www.facebook.com/'} target="_blank" className="a-custom">
        <Row className="d-flex w-100 justify-content-center py-3">
            <Col xs={9}>
                <Row>
                    <Col xs={12} className="name-surname d-flex align-items-center">{name || 'Unknown'} {surname || 'Unknown'}</Col>
                    <Col xs={12}>{address || 'Unknown address'}</Col>
                    <Col xs={12}>{email || 'Unknown email'}</Col>
                    <Col xs={12}>{faculty || 'Unknown faculty'}</Col>
                </Row>
            </Col>
        </Row>
        </a>
    </Container>
};

export default Person;