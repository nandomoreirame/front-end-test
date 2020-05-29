import { useSelector } from 'react-redux';
import { StateInterface } from 'src/interfaces';

export const useStateUsers = () => [
  useSelector<StateInterface, StateInterface['users']>(({ users }) => users),
];
