import React from 'react';
import {
    Button,
    Container,
    Navbar, Nav, NavItem, NavLink, NavbarBrand,
    Jumbotron
} from 'reactstrap';

export default class ChildProfile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
        <div>
            <Navbar>
                <NavbarBrand>ReUnite Families</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href="#">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Testimonials/Legal</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Español / English / Português / Maya / ىبرع</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Register/Login</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Jumbotron className="bg-secondary" fluid>
                <Container className="text-center text-dark" fluid>
                    <h3>I am looking for my child</h3>
                    <br/><br/>
                    <Button color="dark">Register</Button>
                </Container>
            </Jumbotron>
        </div>
    )
  }
}
