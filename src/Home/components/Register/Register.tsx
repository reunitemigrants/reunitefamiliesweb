import * as React from 'react';

import { ProjectDetails } from '../ProjectDetails';
import { Header } from '../../../shared/components/Header';
import { Landing } from '../Landing';
import { RegistrationFlow } from './RegistrationFlow';

export class Register extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Landing content={<RegistrationFlow />} details={<ProjectDetails />} />
      </div>
    );
  }
}
