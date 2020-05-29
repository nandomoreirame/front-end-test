import React from 'react';
import { useStateUsers } from 'src/hooks';
import { Button } from '@material-ui/core';
import { UserActions } from 'src/state';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StorageService } from 'src/services';

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }: PrivateLayoutProps) => {
  const [stateUsers] = useStateUsers();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(UserActions.logoutUser());
    StorageService.logoutUser();
    history.push('/login');
  };

  return (
    <>
      <main>
        <h1>
          Logado como: {stateUsers?.user?.email}{' '}
          <Button variant="text" onClick={handleLogout}>
            Logout
          </Button>
        </h1>
        {children}
      </main>
    </>
  );
};

export default PrivateLayout;
