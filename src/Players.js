import React from 'react';
import { Card } from "react-bootstrap";

function Players({e}) {
  return (
    <div key={e.id}>
      <Card 
      style={{
          

        width: "500px",
        background: "#00b9bf",
        fontSize: "10px",
        margin: "4px",
      }}
    >
      <Card.Img variant="top" src={e.imageUrl} style={{ height: "200px" }} alt='player' />
      <Card.Body>
        <Card.Title>Master Card</Card.Title>
        <Card.Text>
          <div  >
            <h1>{e.name} </h1>
            <h1>{e.team} </h1>
            <h1> {e.nationalty} </h1>
            <h3>* BALLON D'OR:{e.or} </h3>
            <h3>* FIFA WORLD PLAYER OF THE YEAR:{e.fifa} </h3>
            <h3>* EUROPEAN GOLDEN SHOE:{e.europe} </h3>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Players

