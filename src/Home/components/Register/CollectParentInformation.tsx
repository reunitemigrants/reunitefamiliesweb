import * as React from 'react';

import { Jumbotron } from '../../../shared/components/Jumbotron';
import { EditableText, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Link } from 'react-router-dom';
import { fire } from '../../../data/fire';

export interface IGuardianModel {
  fullName: string;
  identification: string;
  email: string;
  password: string;
}

export type IGuardian = Partial<IGuardianModel>;

export interface IParentInformationProps {
  onGuardianChange: (guardian: IGuardian) => void;
  guardian?: IGuardian;
  onNextPage: () => void;
}

export class ParentInformation extends React.Component<
  IParentInformationProps,
  IGuardian
> {
  public constructor(props) {
    super(props);
    this.state = {
      ...props.guardian,
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onIdentificationChange = this.onIdentificationChange.bind(this);

    this.submit = this.submit.bind(this);
  }

  public onNameChange(fullName: string): void {
    this.setState({ fullName });
  }

  public onEmailChange(email: string): void {
    this.setState({ email });
  }

  public onPasswordChange(password: string): void {
    this.setState({ password });
  }

  public onIdentificationChange(
    event: React.FormEvent<HTMLInputElement>,
  ): void {
    const value = event.currentTarget.value;
    this.setState({ identification: value });
  }

  public submit(): void {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.error(error);
      })
      .then(() => {
        this.props.onGuardianChange(this.state);
        this.props.onNextPage();
      });
  }

  public render() {
    let fullName = undefined;
    let email = undefined;
    let password = undefined;
    if (this.props.guardian) {
      fullName = this.props.guardian.fullName;
      email = this.props.guardian.email;
      password = this.props.guardian.password;
    }
    return (
      <Jumbotron>
        <Jumbotron.Breadcrumb>
          <Link to={'/'} className="muted">
            <Icon icon={IconNames.ARROW_LEFT} /> Home&nbsp;
          </Link>
        </Jumbotron.Breadcrumb>
        <Jumbotron.Title>
          My name is&nbsp;
          <EditableText
            className={'select'}
            placeholder={'Alicia Gonzales'}
            value={fullName}
            multiline={false}
            onConfirm={this.onNameChange}
          />.
          <br />
          My email address is&nbsp;
          <EditableText
            className={'select'}
            placeholder={'alicia.gonzales@gmail.com'}
            value={email}
            multiline={false}
            onConfirm={this.onEmailChange}
          />.
          <br />
          I'd like my password to be:&nbsp;
          <EditableText
            className={'select'}
            placeholder={'*************'}
            value={password}
            multiline={false}
            onConfirm={this.onPasswordChange}
          />.
          <br />
        </Jumbotron.Title>
        <Jumbotron.CTA onClick={this.submit}>Next</Jumbotron.CTA>
      </Jumbotron>
    );
  }
}
