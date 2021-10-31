import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router";

import { Col, Container, Row } from "react-bootstrap";

import "./singleservice.css";
import useAuth from "../../hooks/useAuth";

const ServiceDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://ghastly-shadow-83532.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });
  };
  const { serviceID } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://ghastly-shadow-83532.herokuapp.com/services/${serviceID}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="single_service">
      <h1>Place Order</h1>
      <Container className="my-2">
        <Row>
          <Col>
            <Row>
              <h2 className="justify mb-5"> Your Booking </h2>
              <Col>
                <img src={service.img} />
              </Col>
              <Col className="justify">
                <h2 className="text-primary">{service.name}</h2>
                <h5>{service.details}</h5>
                <h5>
                  BDT <span className="text-danger">{service.price}</span>
                </h5>
              </Col>
            </Row>
          </Col>
          <Col className="text-start">
            <h2 className="text-center">Shipment Details</h2>
            <form
              className="my-5 w-50 mx-auto card"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="form-control mb-3"
                defaultValue={user.displayName}
                {...register("name")}
              />

              <input
                className="form-control mb-3"
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <input
                className="form-control mb-3"
                placeholder="Package Name"
                defaultValue={service.name}
                {...register("packagename")}
              />
              <input
                className="form-control mb-3"
                placeholder="your travel place"
                defaultValue={service._id}
                {...register("PackageID")}
              />
              <input
                type="number"
                className="form-control mb-3"
                placeholder="price"
                defaultValue={service.price}
                {...register("price")}
              />
              <input
                className="form-control mb-3"
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />

              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetails;
