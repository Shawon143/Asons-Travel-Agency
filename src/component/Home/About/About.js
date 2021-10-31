import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="my-4">
        <Row>
          <Col className="text-start">
            <h1>
              About <span className="text-primary">A'sons</span>
            </h1>
            <h1>Travel Agency</h1>
            <h5 className="justify">
              Asons agency is a trusted and reliable tour and travel agency
              among all the leading and updated tour-operating services in
              Bangladesh . we are here to bring the luxury to your travelling .
              Asons is a proud member of Association of travel Agents of
              Bangladesh-ATAB and tour operators Association of Bangladesh .
              Safe travelling, your security and your enjoyment are our focus
              during your travels. our experienced and expert travelling guides
              ensure that you do not need to move an inch from your comfort zone
              and make sure that you always have a beautiful satisfactory smile
              on your face . We believe that your smile is our success and Asons
              will do anything to keep you smiling .
            </h5>
            <h5 className="justify">
              By the Grace of Almighty Allah. we are very pleased to say that
              the Umrah service is the most successful program from Asons Being
              honest and fair is our main motive towards our customer and
              therefore we deliver you the best services during the Umrah . We
              know how important this ritual is for the Muslims and thus Asons
              has come up with different Umrah packages from Bangladesh . Each
              of our packages is designed for you so that you can pick it
              according to your desired budget to enjoy and be satisfied with
              our services . Our experienced trainers will guide you to the end
              and see any of your matter . We also have a Hajj program that we
              want to make successful like our Umrah program. Thanks to our
              top-notch services, most of our customrs are based on the
              recommendation from the previous customers.
            </h5>
          </Col>
          <Col>
            <img
              src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=475&q=80"
              alt="Hospital-pic"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
