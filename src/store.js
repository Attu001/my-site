import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './slices/loaderSlice.js';
import successReducer  from './slices/successSlice.js';

export default configureStore({
    reducer: {
        loader: loaderReducer,
        success:successReducer,
    },
});
