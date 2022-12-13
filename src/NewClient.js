import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export function NewClient() {

    const [Client_Name, setClient_Name] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [Zip, setZip] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:4000/api/newclient', {
                  Client_Name, Phone, Email, Address, City, State, Zip
              })
              alert(`user ${Client_Name} has been created`)
              navigate('/clients');
        }catch(err){
            console.log(err.message);
            
          }
    }

  return (
    <>
    {[
        'Dark',
    ].map((variant) => (
      <Card
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '20%', marginLeft: '40%', marginTop: '5%' }}
        className="mb-2"
      >
        <Card.Header>Create New Client</Card.Header>
        <Card.Body>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" required value={Client_Name} onChange={(e)=>setClient_Name(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone #</Form.Label>
            <Form.Control type="text" placeholder="Phone" value={Phone} onChange={(e)=>setPhone(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" value={Address} onChange={(e)=>setAddress(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" value={City} onChange={(e)=>setCity(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" value={State} onChange={(e)=>setState(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword ">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" value={Zip} onChange={(e)=>setZip(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
             Submit
          </Button>
        </Form>
        </Card.Body>
      </Card>
    ))}
  </>
  



  )
}
