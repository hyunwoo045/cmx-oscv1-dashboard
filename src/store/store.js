import adminReducer from './adminSlice';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        admin: adminReducer
    }
});

export {store};
