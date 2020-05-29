import React from 'react';
import { makeStyles, Avatar, Typography, Container, CardContent, Card } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LoginForm from '../components/LoginForm';
import Footer from 'src/components/Footer';

interface LoginPageProps {}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const LoginPage: React.FC<LoginPageProps> = (props: LoginPageProps) => {
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
        </div>

        <Card>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
        <Footer />
      </Container>
    </>
  );
};

export default LoginPage;
