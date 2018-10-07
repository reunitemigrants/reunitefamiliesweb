import * as React from 'react';

import { Header } from '../../shared/components/Header';
import { Landing } from './Landing';

export class Home extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Landing />
      </div>
    );
  }
}
