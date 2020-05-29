import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box, CircularProgress, Checkbox, Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { UserActions } from 'src/state';
import { UserInterface } from 'src/interfaces';
import usersData from '../../assets/users.json';
import { useHistory } from 'react-router-dom';
import { useIsMounted } from 'src/hooks';
import { StorageService } from 'src/services';

interface LoginFormProps {}

type LoginData = {
  email: string;
  password: string;
  remember: boolean;
};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isMounted] = useIsMounted();
  const [isLoading, setLoading] = useState(false);
  const [users] = useState(usersData);
  const { handleSubmit, errors, control, formState } = useForm<LoginData>({
    mode: 'onChange',
  });
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    variant: 'success' | 'info' | 'warning' | 'error';
  }>({
    show: false,
    message: '',
    variant: 'error',
  });
  const [formData, setFormData] = useState<Partial<LoginData>>({
    email: 'felipe@xpinc.com',
    password: 'adminslab',
    remember: true,
  });

  useEffect(() => {
    dispatch(UserActions.updateUsers(users));
  }, [users]); // eslint-disable-line react-hooks/exhaustive-deps

  const loginUser = async (data: LoginData) => {
    if (isMounted.current) setLoading(true);
    const result = users.filter(
      ({ email, password }: UserInterface) => email === data.email && password === data.password,
    );

    if (result.length > 0) {
      const loggedUser = result[0];
      dispatch(UserActions.loginUser(loggedUser));
      StorageService.loginUser(loggedUser);
      setNotification({
        show: true,
        message: 'Logado com sucesso!',
        variant: 'success',
      });
      history.push('/');
    } else {
      dispatch(UserActions.logoutUser());
      StorageService.logoutUser();
      setNotification({
        show: true,
        message: 'Credenciais inválidas. Tente novamente.',
        variant: 'error',
      });
    }

    if (isMounted.current) setLoading(false);
  };

  const handleCloseNotification = () => {
    setNotification({
      ...notification,
      show: false,
      message: '',
    });
  };

  return (
    <form noValidate onSubmit={handleSubmit(loginUser)}>
      <Snackbar
        open={notification.show}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseNotification} severity={notification.variant}>
          {notification.message}
        </Alert>
      </Snackbar>
      <Controller
        as={TextField}
        control={control}
        error={!!errors.email}
        helperText={
          errors.email ? (errors.email.message ? errors.email.message : `Email é obrigatório`) : ''
        }
        variant="outlined"
        defaultValue={formData.email}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        disabled={isLoading}
        rules={{
          required: true,
          minLength: {
            value: 4,
            message: 'O email deve conter pelo menos 4 caracteres',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Endereço de email inválido',
          },
        }}
      />
      <Controller
        as={TextField}
        control={control}
        error={!!errors.password}
        defaultValue={formData.password}
        helperText={
          errors.password
            ? errors.password.message
              ? errors.password.message
              : `Senha é obrigatória`
            : ''
        }
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Senha"
        type="password"
        id="password"
        autoComplete="current-password"
        disabled={isLoading}
        rules={{
          required: true,
          minLength: {
            value: 4,
            message: 'A senha deve conter pelo menos 4 caracteres',
          },
        }}
      />
      <Box component="label" display="flex" alignItems="center">
        <Controller
          as={Checkbox}
          control={control}
          name="remember"
          color="primary"
          disabled={isLoading}
          checked={formData.remember}
          onChange={([_, remember]) => {
            setFormData({ ...formData, remember });
          }}
        />
        <Box>Lembrar-me</Box>
      </Box>
      <Button
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        color="primary"
        disabled={formState.isValid === false || isLoading}
      >
        {!isLoading && <>Entrar</>}
        {isLoading && (
          <>
            <CircularProgress size={20} /> <span>Aguarde...</span>
          </>
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
