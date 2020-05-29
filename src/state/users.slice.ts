import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersStateInterface, UserInterface } from 'src/interfaces';

const name = 'users';

const initialState: UsersStateInterface = {
  isLogged: false,
  user: {},
  list: [],
};

const reducers = {
  updateUsers(state: Readonly<UsersStateInterface>, action: PayloadAction<UserInterface[]>) {
    return {
      ...state,
      list: [...action.payload],
    };
  },

  loginUser(state: Readonly<UsersStateInterface>, action: PayloadAction<UserInterface>) {
    return {
      ...state,
      isLogged: true,
      user: { ...action.payload },
    };
  },

  logoutUser(state: Readonly<UsersStateInterface>) {
    return { ...state, isLogged: false, user: {} };
  },
};

const { actions, reducer } = createSlice({ name, initialState, reducers });

export const UserActions = actions;
export default reducer;
