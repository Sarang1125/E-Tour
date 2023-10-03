import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carosel from './Carosel';
import { Card, Row, Col } from 'react-bootstrap';
//import Registration from './Registration';
import { Link, useParams } from 'react-router-dom';
import Iternary from './Iternary';


function Package() {
  const [packa, setPackage] = useState([]);
const{id}=useParams()
  const getTours = () => {
    fetch("http://localhost:8080/api/packageMaster/"+id)
      .then(response => response.json())
      .then(res => setPackage(res));
  }

  useEffect(() => {
    getTours();
    console.log(packa);
    const data = JSON.stringify(packa);
    console.log(data);
  }, []);

  return (
    <div>
      <Carosel />
      <br />

      <Row className="justify-content-center">
        {packa.map(sec => (
          <Col key={sec.id} md={4} className="mb-4">
            <Card style={{ width: '18rem' }} className='fcontainer'>
            
              <Card.Img variant="top" src={sec.packageimgpath} />
              <Card.Body>
              <Link to={"/Iternary/"+sec.packageId}> {Iternary} 
                <Card.Title>{sec.packageName}</Card.Title>
                </Link>
                <Card.Text>
                </Card.Text>
              </Card.Body>
         
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Package;
