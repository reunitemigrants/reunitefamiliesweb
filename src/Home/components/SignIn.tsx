import * as React from 'react';
import { Button, H2 } from '@blueprintjs/core';

import './SignIn.css';

export interface ISignInProps {}

export class SignIn extends React.Component<ISignInProps> {
  public render() {
    return (
      <div className="sign-in">
        <H2> I have an account</H2>
        If you have already registered sign in here
        <br />
        <Button className="boxy" minimal={true}>
          SIGN IN
        </Button>
      </div>
    );
  }
}
