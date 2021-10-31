import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../singleservice/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://ghastly-shadow-83532.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-4">
      <h2>Our Services</h2>
      <Container>
        <Row xs={1} md={3} className="g-4 mt-3">
          {services.map((service) => (
            <SingleService service={service} key={service.name}></SingleService>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
