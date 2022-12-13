import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export function Editclient() {
    
    const { Client_ID } = useParams();
    const [clientDetails, setclientDetails] = useState({
        Client_ID:'',
        Client_Name:'',
        Phone:'',
        Email:'',
        Address:'',
        City:'',
        State:'',
        Zip:''
    });

    const navigate = useNavigate();

    const getclientDetails = async () =>{

      const { data } = await axios.get(`http://localhost:4000/api/clients/${Client_ID}`)
      setclientDetails({ Client_ID: data[0].Client_ID, Client_Name: data[0].Client_Name, Phone: data[0].Phone, Email: data[0].Email, Address: data[0].Address, City: data[0].City, State: data[0].State, Zip: data[0].Zip})

    }

const handleSubmit = async () =>{
try{
    const { data } = await axios.put(`http://localhost:4000/api/updateclient`,{
      Client_ID, Client_Name: clientDetails.Client_Name, Phone: clientDetails.Phone, Email: clientDetails.Email, Address: clientDetails.Address, City: clientDetails.City, State: clientDetails.State, Zip: clientDetails.Zip
    })
    
    alert('Client updated sucessfully')

    navigate('/clients');

    console.log(data)
  } catch(err){
    console.log(err.message)
  }
}

useEffect(()=>{
getclientDetails();
},[])

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
        <Card.Header>Edit Client</Card.Header>
        <Card.Body>
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Client ID</Form.Label>
            <Form.Control type="text" placeholder="Full Name" value={Client_ID} disable/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" value={clientDetails.Client_Name} onChange={(e)=>setclientDetails({...clientDetails, Client_Name:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone #</Form.Label>
            <Form.Control type="text" placeholder="Phone" value={clientDetails.Phone} onChange={(e)=>setclientDetails({...clientDetails, Phone:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={clientDetails.Email} onChange={(e)=>setclientDetails({...clientDetails, Email:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" value={clientDetails.Address} onChange={(e)=>setclientDetails({...clientDetails, Address:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" value={clientDetails.City} onChange={(e)=>setclientDetails({...clientDetails, City:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" value={clientDetails.State} onChange={(e)=>setclientDetails({...clientDetails, State:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword ">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" value={clientDetails.Zip} onChange={(e)=>setclientDetails({...clientDetails, Zip:e.target.value})}/>
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
