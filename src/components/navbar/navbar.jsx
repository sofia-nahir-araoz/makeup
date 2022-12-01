import React from "react";
import './styles.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../cartWidget/cartWidget";


const Header = ({ numbersOfItems, onHandlerCart}) => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand className="d-flex" href="#home">
            <img
              src="/logo_lip.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"/>
              <h6 className="m-0">Make Up</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <NavDropdown title="Categorias" id="categorias-nav-dropdown">
                    <NavDropdown.Item href="">
                        Rostro
                    </NavDropdown.Item>
                    <NavDropdown.Item href="">
                        Ojos
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="">Productos</Nav.Link>
            </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="">
                <CartWidget numbersOfItems={numbersOfItems}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;



