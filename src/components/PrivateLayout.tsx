import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { PropertiesActions } from 'src/state';
import { useDispatch } from 'react-redux';
import propertiesData from '../assets/properties.json';
import Topbar from './Topbar';
import Footer from './Footer';

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }: PrivateLayoutProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PropertiesActions.updatePropertiesList(propertiesData));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Topbar />
      <Container component="main" maxWidth="lg">
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default PrivateLayout;
