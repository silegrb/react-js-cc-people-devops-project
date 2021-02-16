import React from 'react';
import './App.css';
import {Container} from 'reactstrap';
import {PEOPLE} from "./constants";
import Person from "./Person";

function App() {
  return (
      <Container className="main-container">
          <div className="title">Cloud Computing 2021 - Grupa AMKF</div>
        {PEOPLE.map(({name, surname, address, email, faculty}) =>
            <Person name={name} surname={surname} address={address} email={email} faculty={faculty}/>)}
      </Container>
  );
}

export default App;
