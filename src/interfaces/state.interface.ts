import { UserInterface } from './users.interface';
import { PropertyInterface } from './properties.interface';

export interface UsersStateInterface {
  isLogged: boolean;
  user: UserInterface;
  list: UserInterface[];
}

export interface PropertiesStateInterface {
  propertie: PropertyInterface;
  list: PropertyInterface[];
}

export interface StateInterface {
  users: UsersStateInterface;
  properties: PropertiesStateInterface;
}
