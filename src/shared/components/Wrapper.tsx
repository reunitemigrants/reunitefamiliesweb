import * as React from 'react';

import { Classes } from '@blueprintjs/core';

export const Wrapper: React.SFC<{}> = props => {
  return <div className={Classes.DARK}>{props.children}</div>;
};
