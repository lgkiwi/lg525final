import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';

export function Home() {

    const navigate = useNavigate();
  return (
    <>

    <h1>Wishing Well Agency</h1>
    <h4> Community-Based Organization</h4>
    <h5> Providing services to individuals and families in southeast Michigan</h5>
    <br></br>

    <Button variant="dark" onClick={()=>navigate('/')}>Home</Button>{' '}
    <Button variant="dark" onClick={()=>navigate('/clients')}>Clients</Button>{' '}
    <Button variant="dark"onClick={()=>navigate('/newclient')}>New Client</Button>{' '}
    <Button variant="dark" onClick={()=>navigate('/staff')}>Staff</Button>{' '}
    <Button variant="dark" onClick={()=>navigate('/foodpantry')}>Food Pantry</Button>{' '}


    <>
    {[
        'Dark',
    ].map((variant) => (
      <Card
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '20%', marginLeft: '10%', marginTop: '15%' }}
        className="mb-2"
      >
        <Card.Header>testing</Card.Header>
        <Card.Body>
          <Card.Title>{variant} Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='secondary' onClick={()=>navigate('/foodpantry')}>Go Somewhere</Button>
        </Card.Body>
      </Card>
    ))}
  </>




</>



  )
}

