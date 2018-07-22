import * as React from 'react';
import * as MoreDetails from './MoreDetails';

import {
  Button,
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Input,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Jumbotron,
} from 'reactstrap';
import fire from 'data/fire';

import { translate, Trans } from 'react-i18next';
import { InjectedTranslateProps } from 'react-i18next/src/props';

interface Props extends InjectedTranslateProps {}

interface State {
  email: string;
  password: string;
}

class Landing extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (field: keyof State, event) => {
    this.setState({
      [field]: event.target.value,
    } as Pick<State, typeof field>);
  };

  login() {
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ...
      });
  }

  render() {
    // Instead of the trans component, you can use the t function in props,
    // if the component is being used with the translate HOC
    // const { t } = this.props;

    return (
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
              <NavLink href="#">
                Español / English / Português / Maya / ىبرع
              </NavLink>
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
                <h3>
                  <Trans>I am looking for my child</Trans>
                </h3>
                <br />
                <br />
                <Button color="dark">Register</Button>
              </Col>
              <Col sm="4">
                <div className="bg-light p-3">
                  <h4>I already have an account</h4>
                  <p>
                    Some description explaining what this registration is for.
                    If you are a foster parent or guardian of a child, a
                    relative, or a parent.
                  </p>

                  <Form>
                    <FormGroup>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this, 'email')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange.bind(this, 'password')}
                      />
                    </FormGroup>
                    <Button color="primary">Login</Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <MoreDetails.MoreDetails />
      </div>
    );
  }
}

export default translate('landing')(Landing);
