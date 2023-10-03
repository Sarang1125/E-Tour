import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carosel from './Carosel';
import { Button} from 'react-bootstrap';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Subsector from './SubSector';




function Home() {
  const [sector, setSector] = useState([]);

  const getTours = () => {
    fetch("http://localhost:8080/tour/sectors")
      .then(response => response.json())
      .then(res => setSector(res));
     
  }

  // console.log("+++++++"+sector[0].sectorId)
  useEffect(() => {
    getTours();
    console.log(sector);
  }, []);

  return (
    <div>
      <Carosel />
      <br />
      
      <Row className="justify-content-center">
        {sector.map(sec => (
          <Col key={sec.id} md={4} className="mb-4">
            <Card style={{ width: '18rem' }} className='fcontainer'>
              <Link to ={"/Subsector/"+sec.sectorId}> {Subsector}
              <Card.Img variant="top" src={sec.sectorImgPath} />
              <Card.Body>
                <Card.Title>{sec.sectorName}</Card.Title>
                <Card.Text>
                  {sec.sectorinfo}
                </Card.Text>
                
              </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
