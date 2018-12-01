import * as React from 'react';

import { Jumbotron } from '../../../shared/components/Jumbotron';
import { Icon, MenuItem } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { ItemRenderer, Select } from '@blueprintjs/select';
import { Link } from 'react-router-dom';

export enum LanguageType {
  English = 'English',
  Spanish = 'Spanish',
}

export interface ILanguage {
  language: LanguageType;
  rank: number;
}

export const Languages: ILanguage[] = [
  {
    language: LanguageType.English,
    rank: 1,
  },
  {
    language: LanguageType.Spanish,
    rank: 1,
  },
];

const LanguageSelect = Select.ofType<ILanguage>();

export const LanguageRenderer: ItemRenderer<ILanguage> = (
  language,
  { handleClick, modifiers },
): React.ReactElement<any> => {
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      label={language.language.toString()}
      key={language.rank}
      onClick={handleClick}
      text={language.language}
    />
  );
};

export interface ISelectLanguageProps {
  onSelectLanguage: (item: ILanguage) => void;
  language: ILanguage;
  onNextPage: () => void;
}

export const SelectLanguage: React.SFC<ISelectLanguageProps> = props => {
  return (
    <Jumbotron>
      <Jumbotron.Breadcrumb>
        <Link to={'/'} className="muted">
          <Icon icon={IconNames.ARROW_LEFT} /> Home&nbsp;
        </Link>
      </Jumbotron.Breadcrumb>
      <Jumbotron.Title>
        I am looking for my child. <br /> I speak{' '}
        <LanguageSelect
          items={Languages}
          filterable={false}
          itemRenderer={LanguageRenderer}
          noResults={<MenuItem disabled={true} text="No results." />}
          onItemSelect={props.onSelectLanguage}
        >
          <a className={'select'}>
            {props.language.language}&nbsp;
            <Icon icon={IconNames.CHEVRON_DOWN} iconSize={Icon.SIZE_LARGE} />
          </a>.
        </LanguageSelect>
      </Jumbotron.Title>
      <Jumbotron.CTA onClick={props.onNextPage}>Next</Jumbotron.CTA>
    </Jumbotron>
  );
};
