import React, {useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';


export function Wwa() {

    const [Wwa, setWwa]= useState([]);

    const getWwa = async () =>{

        const { data } = await axios.get('http://localhost:4000/foodpantry');
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
        <th>Category</th>
        <th>Item</th>
        <th>Stock</th>
        <th>Product ID</th>
      </tr>
    </thead>
    <tbody>
      {
          Wwa.length>0 && Wwa.map((item,index)=>{
                return (<tr>
                      <td>{item.Category}</td>
                      <td>{item.Item}</td>
                      <td>{item.Stock}</td>
                      <td>{item.Product_ID}</td>


                    
                </tr>)

          })
      }
      
      
    </tbody>
  </Table>
  )
}

