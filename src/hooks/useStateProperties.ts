import { useSelector } from 'react-redux';
import { StateInterface } from 'src/interfaces';

export const useStateProperties = () => [
  useSelector<StateInterface, StateInterface['properties']>(({ properties }) => properties),
];
