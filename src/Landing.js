import React from 'react';
import {
    Button,
    Container, Col, Row,
    Form, FormGroup, Input, Label,
    Navbar, Nav, NavItem, NavLink, NavbarBrand,
    Jumbotron
} from 'reactstrap';
import fire from './firebase/fire';

export default class Landing extends React.Component {
  constructor() {
    super();

    this.state = {
        email: '',
        password: ''
    }
  }

  handleChange(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  login(){
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
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
                <Row>
                    <Col>
                        <h3>I am looking for my child</h3>
                        <br/><br/>
                        <Button color="dark">Register</Button>
                    </Col>
                    <Col sm="4">
                        <div className="bg-light p-3">
                            <h4>I already have an account</h4>
                            <p>Some description explaining what this
registration is for. If you are a foster parent or
guardian of a child, a relative, or a parent.</p>

                            <Form>
                                <FormGroup>
                                    <Input type="email" placeholder="Email Address"
                                        value={this.state.email}
                                        onChange={(evnt)=>this.handleChange("email", evnt)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" placeholder="Password"
                                        value={this.state.password}
                                        onChange={(evnt)=>this.handleChange("password", evnt)}/>
                                </FormGroup>
                                <Button color="primary">Login</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
                </Container>
            </Jumbotron>
        </div>
    )
  }
}
