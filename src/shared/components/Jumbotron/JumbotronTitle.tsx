import * as React from 'react';

export interface IJumbotronTitleProps {
  small?: boolean;
}

export const JumbotronTitle: React.SFC<IJumbotronTitleProps> = props => {
  let classes = 'title';
  if (props.small) {
    classes = `${classes} small`;
  }
  return <div className={classes}>{props.children}</div>;
};
