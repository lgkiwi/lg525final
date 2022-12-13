import React, {useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Table, Button } from 'react-bootstrap';


export function Clients() {

    const [Clients, setClients]= useState([]);
    const navigate = useNavigate();

    const getClients = async () =>{

        const { data } = await axios.get('http://localhost:4000/api/clients');
        setClients(data);
        console.log(data, 'Clients');

    }

    const handleDelete = async (Client_ID)=>{

      const res = window.confirm('Are you sure you want to delete this client?');
      if(res){
        const { data } = await axios.delete(`http://localhost:4000/api/deleteclient/${Client_ID}`);
        
        alert('Client has been deleted.');
        navigate(0);
      }


    }

    useEffect(()=>{

      getClients()
      },[])

      console.log(Clients, 'Clients test')
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Client ID</th>
        <th>Full Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip</th>
        <th>Edit Client</th>
        <th>Delete Client</th>
      </tr>
    </thead>
    <tbody>
      {
          Clients.length>0 && Clients.map((item,index)=>{
                return (<tr>
                      <td>{item.Client_ID}</td>
                      <td>{item.Client_Name}</td>
                      <td>{item.Phone}</td>
                      <td>{item.Email}</td>
                      <td>{item.Address}</td>
                      <td>{item.City}</td>
                      <td>{item.State}</td>
                      <td>{item.Zip}</td>
                      <td><Button variant="dark" onClick={()=>navigate(`/Clients/${item.Client_ID}`)}>Edit Client</Button>{' '}</td>
                      <td><Button variant="dark"onClick={()=>handleDelete(item.Client_ID)}>Delete Client</Button>{' '}</td>
                  
                    
                </tr>)

          })
      }
      
      
    </tbody>
  </Table>
  )
}