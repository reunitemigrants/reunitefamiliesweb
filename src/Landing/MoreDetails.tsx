import * as React from 'react';
import { Col, Jumbotron, Row } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import { LandingPageConstants } from '../data/translations';

export class MoreDetails extends React.Component<{}> {
  public render() {
    return (
      <Jumbotron>
        <Container className="text-dark" fluid={true}>
          <Row>
            <Col width={6}>
              <h3>{LandingPageConstants.ReuniteWithFamilyTitle}</h3>
              <br />
              <br />
              <p>{LandingPageConstants.ReuniteWithFamilyBody}</p>
            </Col>
            <Col>
              <img />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export interface Foo {
  blah: string;
}
