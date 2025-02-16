import {configureStore} from '@reduxjs/toolkit';
import characterReducer from './characterSlicer';

export const store = configureStore({
    reducer: {
        character: characterReducer
    }
})