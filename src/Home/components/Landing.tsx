import * as React from 'react';

import './Landing.css';

export interface ILandingProps {
  content: React.ReactElement<any>;
  details: React.ReactElement<any>;
}

export class Landing extends React.Component<ILandingProps> {
  public render() {
    return (
      <div className="landing">
        <div className="landing-content">
          <div className="max-width-container">{this.props.content}</div>
        </div>
        <div className="landing-details">
          <div className="max-width-container">{this.props.details}</div>
        </div>
      </div>
    );
  }
}
