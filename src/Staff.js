import React, {useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';


export function Staff() {

    const [Wwa, setWwa]= useState([]);

    const getWwa = async () =>{

        const { data } = await axios.get('http://localhost:4000/api/staff');
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
        <th>Staff ID</th>
        <th>Staff</th>
        <th>Speciality</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Accepting Clients</th>

      </tr>
    </thead>
    <tbody>
      {
          Wwa.length>0 && Wwa.map((item,index)=>{
                return (<tr>
                      <td>{item.staff_id}</td>
                      <td>{item.staff_name}</td>
                      <td>{item.speciality}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.accepting_new_clients}</td>
                 
                    
                </tr>)

          })
      }
      
      
    </tbody>
  </Table>
  )
}

