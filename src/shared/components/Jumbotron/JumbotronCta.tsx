import * as React from 'react';

import { Button, IButtonProps } from '@blueprintjs/core';

export const JumboTronCta: React.SFC<IButtonProps> = props => {
  const { className, children, large, minimal, ...rest } = props;
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
  return (
    <div className="cta-wrapper">
      <Button className={classes} large={isLarge} minimal={isMinimal} {...rest}>
        {children}
      </Button>
    </div>
  );
};
