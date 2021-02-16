import React from 'react';
import './App.css';
import {Container,Row,Col} from 'reactstrap';
import {PEOPLE} from "./constants";
import Person from "./Person";

function App() {
  return (
      <Container className="main-container py-3">
          <div className="title pb-5">Cloud Computing 2021 - Grupa AMKF</div>
        {PEOPLE.map(({name, surname, address, email, faculty,facebookLink}, index) =>
            <>
            <Person name={name} surname={surname} address={address} email={email} faculty={faculty} facebookLink={facebookLink}/>
                {index < PEOPLE.length - 1 &&
                <Row>
                    <Col xs={{offset: 6, size: 6}} className="line"/>
                </Row>
                }
            </>)}
      </Container>
  );
}

export default App;
