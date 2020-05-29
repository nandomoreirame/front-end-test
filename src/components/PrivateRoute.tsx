import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect, RouteProps, RouteComponentProps, useHistory } from 'react-router-dom';
import { CircularProgress, Box, Typography } from '@material-ui/core';
import { StorageService, LoggerService } from 'src/services';
import { useStateUsers, useIsMounted } from 'src/hooks';
import { UserActions } from 'src/state';
import { UserInterface } from 'src/interfaces';

interface PrivateRouteProps extends RouteProps {
  layout: React.ComponentType<any>;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  layout: Layout,
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isMounted] = useIsMounted();
  const [stateUsers] = useStateUsers();
  const [isLogged, setLogged] = useState(stateUsers.isLogged);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!stateUsers.isLogged || !StorageService.isUserLogged) {
      reAuth();
    } else {
      if (isMounted.current) setLoading(false);
    }
  }, [stateUsers.isLogged]); // eslint-disable-line react-hooks/exhaustive-deps

  const reAuth = async () => {
    if (isMounted.current) setLoading(true);
    try {
      const userLogged: UserInterface = StorageService.loggedUser;
      console.log({ userLogged });

      if (Object.keys(userLogged).length) {
        setTimeout(() => {
          dispatch(UserActions.loginUser(userLogged));
          if (isMounted.current) setLogged(true);
        }, 1000);
      }
    } catch (error) {
      LoggerService.error('[ ERROR ]:', error);
      dispatch(UserActions.logoutUser());
      StorageService.logoutUser();
      history.push('/login');
    }

    setTimeout(() => {
      if (isMounted.current) setLoading(false);
    }, 1000);
  };

  if (isLoading)
    return (
      <Box
        mt={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ flexFlow: 'column' }}
      >
        <CircularProgress style={{ marginBottom: '10px' }} size={26} />
        <Typography>Aguarde. Carregando...</Typography>
      </Box>
    );

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
