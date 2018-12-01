import * as React from 'react';

export interface IJumbotronContentProps {
  contain?: boolean;
}

export const JumbotronContent: React.SFC<IJumbotronContentProps> = props => {
  let classes = 'content';
  if (props.contain) {
    classes = `${classes} contain`;
  }
  return <div className={classes}>{props.children}</div>;
};
