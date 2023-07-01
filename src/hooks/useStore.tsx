import { useContext } from 'react';
import { RootStore } from '../store';
import { StoreContext } from '../providers/StoreProvider';

export const useStore = (): RootStore => useContext(StoreContext);