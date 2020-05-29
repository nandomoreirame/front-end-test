import { createSlice } from '@reduxjs/toolkit';
import { PropertiesStateInterface } from 'src/interfaces';

const name = 'properties';

const initialState: PropertiesStateInterface = {
  propertie: {},
  list: [],
};

const reducers = {};

const { actions, reducer } = createSlice({ name, initialState, reducers });

export const PropertiesActions = actions;
export default reducer;
