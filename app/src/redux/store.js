import { configureStore } from '@reduxjs/toolkit';
import { componentsReducer } from './components/slice';

export const store = configureStore({
    reducer: {
        components: componentsReducer,
    },
});
