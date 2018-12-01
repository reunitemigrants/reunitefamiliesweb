import * as React from 'react';

import { Button, IButtonProps, Classes } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export interface IJumbotronLinkProps extends IButtonProps {
  link: true;
  to: string;
}

export type IJumbotronCTAProps = IJumbotronLinkProps | IButtonProps;

export const JumboTronCta: React.SFC<IJumbotronCTAProps> = props => {
  const { className, children, large, minimal, ...rest } = props;
  let link: boolean = false;
  let to: string;
  if ((props as IJumbotronLinkProps).link) {
    const propsTyped = props as IJumbotronLinkProps;
    link = propsTyped.link;
    to = propsTyped.to;
  }
  let classes = 'boxy cta';
  let isLarge: boolean = true;
  let isMinimal: boolean = true;
  if (className) {
    classes = `${classes} ${className}`;
  }
  if (large !== undefined) {
    isLarge = large;
  }
  if (minimal !== undefined) {
    isMinimal = minimal;
  }
  if (link) {
    if (isMinimal && isLarge) {
      classes = `${Classes.BUTTON} ${Classes.MINIMAL} ${
        Classes.LARGE
      } ${classes}`;
    } else if (isLarge) {
      classes = `${Classes.BUTTON} ${Classes.LARGE} ${classes}`;
    } else if (isMinimal) {
      classes = `${Classes.BUTTON} ${Classes.MINIMAL} ${classes}`;
    } else {
      classes = `${Classes.BUTTON} ${classes}`;
    }
  }

  return (
    <div className="cta-wrapper">
      {link ? (
        <Link className={classes} to={to}>
          {children}
        </Link>
      ) : (
        <Button
          className={classes}
          large={isLarge}
          minimal={isMinimal}
          {...rest}
        >
          {children}
        </Button>
      )}
    </div>
  );
};
