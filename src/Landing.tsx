import * as React from 'react';
import {
    Button,
    Container,
    Col,
    Row,
    Form, FormGroup, Input,
    Navbar, Nav, NavItem, NavLink, NavbarBrand,
    Jumbotron
} from 'reactstrap';
import fire from 'data/fire';

interface Props {

}

interface State {
    email: any,
    password: string,
}

export default class Landing extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
        email: '',
        password: '',
    };
  }

  handleChange = (field: keyof State, event) => {
    this.setState({
      [field]: event.target.value
    } as Pick<State, typeof field>);
  };

  login(){
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
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
            <Jumbotron className="bg-secondary" fluid={true}>
                <Container className="text-center text-dark" fluid={true}>
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
                                        onChange={this.handleChange.bind(this, "email")}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleChange.bind(this, "password")}/>
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
