import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            A'Sons Agency
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            {user.email ? (
              <Nav.Link as={Link} to="/addservice">
                Add-Service
              </Nav.Link>
            ) : (
              ""
            )}

            {user.email ? (
              <Nav.Link as={Link} to="/myorder">
                My-Order
              </Nav.Link>
            ) : (
              ""
            )}

            <Nav.Link>
              <span>{user.displayName}</span>
            </Nav.Link>
            {user.email ? (
              <Button onClick={logOut}>Log Out</Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
