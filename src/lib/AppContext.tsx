import { createContext } from 'react';
import {ReducerAction} from './reducers';

type AppContextValue = {dispatch: React.Dispatch<ReducerAction> | null};

const AppContext = createContext<AppContextValue>({dispatch: null});
export default AppContext;
