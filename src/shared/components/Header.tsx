import * as React from 'react';

import {
  Alignment,
  Button,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import { Colors } from '../models/colors';

import './Header.css';

export class Header extends React.Component<{}> {
  public render() {
    return (
      <Navbar
        className="header"
        style={{ backgroundColor: Colors.PrimaryBlue }}
      >
        <div className="max-width-container">
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading className="title">
              <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="Logo" />{' '}
              ReUnite Families
            </NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button minimal={true} large={true}>
              ABOUT
            </Button>
            <Button minimal={true} large={true}>
              CONTACT US
            </Button>
            <Button icon={IconNames.USER} minimal={true} large={true}>
              LOGIN
            </Button>
          </NavbarGroup>
        </div>
      </Navbar>
    );
  }
}
