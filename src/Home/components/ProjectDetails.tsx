import * as React from 'react';

import { Jumbotron } from '../../shared/components/Jumbotron';

export const ProjectDetails: React.SFC<{}> = () => {
  return (
    <Jumbotron>
      <Jumbotron.Title small={true}>Reunite with your child</Jumbotron.Title>
      <Jumbotron.Content contain={true}>
        No family deserves to be separated. This site works with the Department
        of Health and Human Services (HHS) so that you can; locate your
        children.
      </Jumbotron.Content>
    </Jumbotron>
  );
};
