//import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button,Table } from 'react-bootstrap';
import './Bookings.css';
import Swal from 'sweetalert2';
function Bookings(){
     const [pass,setPass]=useState([]);
     const [cust,setCust]=useState([]);
     const navigate = useNavigate();
     const getPass=()=>{
        fetch("http://localhost:8080/api/getAllPassengers") //here 2 is customerid which we will take from session storage
        .then(respone => respone.json())
        .then(set => setPass(set));
     }
     const getcust=()=>{
        fetch("http://localhost:8080/api/CustomerByid/1") //here 2 is customerid which we will take from session storage
        .then(respone => respone.json())
        .then(set => setCust(set));
     }
     
     const calculateTotalAmount = () => {
        return pass.reduce((total, item) => total + item.paxAmount, 0);
      };
      const totalamt = calculateTotalAmount();
      const withtax = totalamt*1.18;

    useEffect(() => {
        const fetchData = async () => {
           getPass();
           getcust();
        };
        const timeout = setTimeout(() => {
          fetchData();
        }, 1000); // 1000 milliseconds = 1 second
        return () => clearTimeout(timeout);
      }, []);
      
     const id = 4;
     const handleNavigate = () => {
       // postBooking();
        Swal.fire(
                   `BOOKING CONFIRM 🤩 `,
                   'HAPPY JOURNEY 🌍!!',
                   'success'
                );
        navigate(`/home`);
      };
     
    return (
        <>
        
        <div className="cost-master-container">
            <h1 className="centered-heading">Journey Details ‼️ Excited 😃</h1>
            <div className="card-container">
                <Card className="cost-card">
                    <Card.Body>
                        {/* <Card.Title className="card-title">Cost ID: {item?.costId}</Card.Title> */}
                        <div className="table-container">
                            <table className="table">
                                <b>
                                <tbody>
                                <tr>
        <th style={{ textAlign: 'center', fontWeight: 'bold',backgroundColor: 'black' }}>Booking Details</th>
    </tr>
                                    <tr>
                                        <td >First Name 🛬    </td>
                                        <td>{cust.firstname}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name 🛬 </td>
                                        <td>{cust.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender 🛬</td>
                                        <td>{cust.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail 🛬</td>
                                        <td>{cust.email}</td>
                                    </tr>
                                    <tr>
                                        <td>DOB 🛬</td>
                                        <td>{cust.dob}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact 📞</td>
                                        <td>{cust.mobile}</td>
                                    </tr>
                                    <tr>
                                        <td>Departure Date  🛫</td>
                                        <td>01-04-2023</td>
                                    </tr>
                                    <tr>
                                        <td>Return Date 🛬</td>
                                        <td>05-04-2023</td>
                                    </tr>
                                    <tr>
                                        <td>Total Tour Amount 💰</td>
                                        <td>{totalamt}</td>
                                    </tr>
                                    <tr>
                                        <td> Including Taxes(18%) 💰</td>
                                        <td>{withtax}</td>
                                    </tr>
    
                                </tbody>
                                </b>
                            </table>
                        </div>
                        <br />
                        <Button variant="outline-light" onClick={() => handleNavigate(id)}>
                           Confirm Booking❗👈
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <div>
                <h3> Passengers Details</h3>
            <Table striped bordered hover variant="dark" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Birth Date</th>
      <th>Type</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    {pass.map((passenger, index) => (
      <tr key={index} style={{ backgroundColor: 'transparent' }}>
        <td style={{ fontWeight: 'bold' }}>{passenger.paxName}</td>
        <td>{passenger.paxBirthdate}</td>
        <td>{passenger.paxType}</td>
        <td style={{ color: passenger.paxAmount > 50 ? 'red' : 'green' }}>
          ${passenger.paxAmount}
        </td>
      </tr>
    ))}
  </tbody>
</Table>

            </div>
        </div>
        </>
    );
}
export default Bookings;