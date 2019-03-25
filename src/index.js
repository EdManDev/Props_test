import React from 'react';
import ReactDOM from 'react-dom';
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';

function Container() {

  const devices = [
    { name: "EdMan", lastname: "Xps99", age: "29", date: "1/2019" },
    { name: "Samsung", lastname: "Galaxy", age: "60", date: "90/2019" },
    { name: "LG", lastname: "Flatron", age: "30", date: "40/2019" },
    { name: "LG", lastname: "Flatron", age: "30", date: "40/2019" },
  ]

  return (
    <section>
      <Controler student={devices[0]} />
      <Controler student={devices[1]} />
      <Controler student={devices[2]} />
      <Controler student={devices[3]} />
    </section>
  );
}

const Controler = props => {

  // console.log(props);

  const { name, lastname, age, date } = props.student;

  return (
    <div>
      <hr />
      <h1>{name}</h1>
      <p>{lastname}</p>
      <p>{age}</p>
      <p>{date}</p>
      <hr />
    </div>
  );
}

ReactDOM.render(<Container />, document.getElementById('root'));