import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'


class CustomNavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">Fabio Nogueira</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/sobre">
              Sobre
            </NavItem>
            <NavItem eventKey={2} href="/redesprofissionais">
              Redes Profissionais
            </NavItem>
            <NavItem eventKey={3} href="/redessociais">
              Redes Sociais
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNavBar;
