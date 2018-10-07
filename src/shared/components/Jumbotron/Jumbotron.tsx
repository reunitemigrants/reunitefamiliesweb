import * as React from 'react';

import { IButtonProps } from '@blueprintjs/core';

import { JumboTronCta } from './JumbotronCta';
import { IJumbotronTitleProps, JumbotronTitle } from './JumbotronTitle';
import { JumbotronBreadcrumb } from './JumbotronBreadcrumb';
import { IJumbotronContentProps, JumbotronContent } from './JumbotronContent';

import './Jumbotron.css';

interface IJumbotronProps {
  className?: string;
}

export class Jumbotron extends React.Component<IJumbotronProps> {
  public static CTA: React.SFC<IButtonProps> = JumboTronCta;
  public static Title: React.SFC<IJumbotronTitleProps> = JumbotronTitle;
  public static Breadcrumb: React.SFC = JumbotronBreadcrumb;
  public static Content: React.SFC<IJumbotronContentProps> = JumbotronContent;

  public render() {
    let classes = 'jumbotron';
    if (this.props.className) {
      classes = `${classes} ${this.props.className}`;
    }
    return <div className={classes}>{this.props.children}</div>;
  }
}
