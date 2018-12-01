import * as React from 'react';

import { Header } from '../../shared/components/Header';
import { Landing } from './Landing';
import { Splash } from './Splash';
import { ProjectDetails } from './ProjectDetails';

export class Home extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Landing content={<Splash />} details={<ProjectDetails />} />
      </div>
    );
  }
}
