import React, {useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';


export function Wwa() {

    const [Wwa, setWwa]= useState([]);

    const getWwa = async () =>{

        const { data } = await axios.get('http://localhost:4000/clients');
        setWwa(data);
        console.log(data, 'wwa');

    }

    useEffect(()=>{

        getWwa()
      },[])

      console.log(Wwa, 'wwa test')
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
        <th>state</th>
        <th>Zip</th>
      </tr>
    </thead>
    <tbody>
      {
          Wwa.length>0 && Wwa.map((item,index)=>{
                return (<tr>
                      <td>{item.Client_ID}</td>
                      <td>{item.Client_Name}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                      <td>{item.zip}</td>
                  
                    
                </tr>)

          })
      }
      
      
    </tbody>
  </Table>
  )
}

