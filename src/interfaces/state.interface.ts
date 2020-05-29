import { UserInterface } from './users.interface';
import { PropertieInterface } from './properties.interface';

export interface UsersStateInterface {
  isLogged: boolean;
  user: UserInterface;
  list: UserInterface[];
}

export interface PropertiesStateInterface {
  propertie: PropertieInterface;
  list: PropertieInterface[];
}

export interface StateInterface {
  users: UsersStateInterface;
  properties: PropertiesStateInterface;
}
