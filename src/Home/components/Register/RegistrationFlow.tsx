import * as React from 'react';
import { ILanguage, Languages, SelectLanguage } from './SelectLanguage';
import { IGuardian, ParentInformation } from './CollectParentInformation';

export enum RegisterPageType {
  LanguageSelect = 0,
  ParentInformation = 1,
  ChildInformation = 2,
}

export interface IRegisterLandingState {
  language: ILanguage;
  guardian?: IGuardian;
  currentPage: RegisterPageType;
}

export class RegistrationFlow extends React.Component<
  {},
  IRegisterLandingState
> {
  public constructor(props) {
    super(props);
    this.state = {
      language: Languages[0],
      currentPage: RegisterPageType.LanguageSelect,
    };
    this.onGuardianInfoChange = this.onGuardianInfoChange.bind(this);
    this.onSelectLanguage = this.onSelectLanguage.bind(this);
    this.onGotoNextPage = this.onGotoNextPage.bind(this);
  }

  public onSelectLanguage(item: ILanguage): void {
    this.setState({ language: item });
  }

  public onGuardianInfoChange(guardian: IGuardian): void {
    this.setState({ guardian });
  }

  public onGotoNextPage(): void {
    switch (this.state.currentPage) {
      case RegisterPageType.LanguageSelect:
        this.setState({ currentPage: RegisterPageType.ParentInformation });
        break;
      case RegisterPageType.ParentInformation:
        this.setState({ currentPage: RegisterPageType.ChildInformation });
        break;
      case RegisterPageType.ChildInformation:
        this.setState({ currentPage: RegisterPageType.ChildInformation });
        break;
    }
  }

  public render() {
    switch (this.state.currentPage) {
      case RegisterPageType.ParentInformation:
        return (
          <ParentInformation
            onGuardianChange={this.onGuardianInfoChange}
            guardian={this.state.guardian}
            onNextPage={this.onGotoNextPage}
          />
        );
      case RegisterPageType.LanguageSelect:
      default:
        return (
          <SelectLanguage
            onSelectLanguage={this.onSelectLanguage}
            language={this.state.language}
            onNextPage={this.onGotoNextPage}
          />
        );
    }
  }
}
