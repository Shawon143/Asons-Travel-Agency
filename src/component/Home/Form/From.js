import React from "react";
import "./form.css";
import { Button, Form } from "react-bootstrap";

const From = () => {
  return (
    <div className="form text-white">
      <h5>SUBSCRIBE OUR NEWSLETTER</h5>
      <h5>SUBSCRIBE TO RECIEVE OUR INTERESTING UPDATES</h5>
      <Form>
        <Form.Group
          className="mb-3 d-flex justify-content-center p-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="w-50"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default From;
