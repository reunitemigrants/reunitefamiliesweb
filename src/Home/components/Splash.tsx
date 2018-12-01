import * as React from 'react';

import { Jumbotron } from '../../shared/components/Jumbotron';

export const Splash: React.SFC<{}> = () => {
  return (
    <Jumbotron>
      <Jumbotron.Title>I am looking for my child</Jumbotron.Title>
      <Jumbotron.CTA link={true} to={'/register'}>
        REGISTER
      </Jumbotron.CTA>
    </Jumbotron>
  );
};
