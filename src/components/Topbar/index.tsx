import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Button,
} from '@material-ui/core';
// import { AccountCircle as AccountIcon } from '@material-ui/icons';
import { useStateUsers } from 'src/hooks';
import { UserActions } from 'src/state';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StorageService } from 'src/services';

interface TopbarProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      marginBottom: '60px',
    },
    button: {
      color: '#fff',
    },
    title: {
      flexGrow: 1,
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: 800,
    },
    text: {
      color: '#fff',
      fontWeight: 500,
    },
  }),
);

export const Topbar: React.FC<TopbarProps> = (props: TopbarProps) => {
  const classes = useStyles();
  const [stateUsers] = useStateUsers();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(UserActions.logoutUser());
    StorageService.logoutUser();
    history.push('/login');
  };

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          React App
        </Typography>
        {stateUsers.isLogged && (
          <Typography className={classes.text}>
            Olá {stateUsers?.user?.email}{' '}
            <Button variant="text" onClick={handleLogout} className={classes.button}>
              Logout
            </Button>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
