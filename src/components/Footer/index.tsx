import React from 'react';
import { Typography, Box } from '@material-ui/core';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <Box component="footer" mt={10}>
      <Typography component="p" variant="body2" color="textSecondary" align="center">
        Copyright © {new Date().getFullYear()}.
        <a
          href="https://github.com/nandomoreirame/front-end-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download do código fonte aqui.
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
