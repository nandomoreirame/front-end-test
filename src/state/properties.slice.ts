import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropertiesStateInterface, PropertyInterface } from 'src/interfaces';

const name = 'properties';

const initialState: PropertiesStateInterface = {
  propertie: {},
  list: [],
};

const reducers = {
  updatePropertiesList(
    state: Readonly<PropertiesStateInterface>,
    action: PayloadAction<PropertyInterface[]>,
  ) {
    return {
      ...state,
      list: [...action.payload],
    };
  },
};

const { actions, reducer } = createSlice({ name, initialState, reducers });

export const PropertiesActions = actions;
export default reducer;
