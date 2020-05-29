import React from 'react';
import { Box, Typography } from '@material-ui/core';

interface Error404PageProps {}

export const Error404Page: React.FC<Error404PageProps> = (props: Error404PageProps) => {
  return (
    <Box component="main" display="box" alignContent="center" justifyContent="center">
      <Box>
        <Typography component="h1">404</Typography>
        <Typography component="h1">Oops, page not found.</Typography>
      </Box>
    </Box>
  );
};

export default Error404Page;
