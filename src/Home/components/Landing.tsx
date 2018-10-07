import * as React from 'react';

import { Jumbotron } from '../../shared/components/Jumbotron';

import './Landing.css';

export class Landing extends React.Component {
  public render() {
    return (
      <div className="landing">
        <div className="landing-content">
          <div className="max-width-container">
            <Jumbotron>
              <Jumbotron.Title>I am looking for my child</Jumbotron.Title>
              <Jumbotron.CTA>REGISTER</Jumbotron.CTA>
            </Jumbotron>
          </div>
        </div>
        <div className="landing-details">
          <div className="max-width-container">
            <Jumbotron>
              <Jumbotron.Title small={true}>
                Reunite with your child
              </Jumbotron.Title>
              <Jumbotron.Content contain={true}>
                No family deserves to be separated. This site works with the
                Department of Health and Human Services (HHS) so that you can;
                locate your children.
              </Jumbotron.Content>
            </Jumbotron>
          </div>
        </div>
      </div>
    );
  }
}
