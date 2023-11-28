import React from 'react'



import Card from 'react-bootstrap/Card';

const Player = ({x}) => {
  return (
    <div style={{  display:'flex', flexDirection:'column' }} > 
    <Card style={{ width: '18rem' , padding:'20px' }}>
    <Card.Img variant="top" src={x.image} />
    <Card.Body>
      <Card.Title>{x.name}</Card.Title>
      <Card.Text>{x.team}</Card.Text>
      <Card.Text>{x.nationality}</Card.Text>
      <Card.Text>{x.number}</Card.Text>
      
    </Card.Body>
  </Card>
  </div>
  )
}

export default Player