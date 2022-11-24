import { configureStore } from "@reduxjs/toolkit";
import useReduce from "./modules/user";


const store = configureStore({
    reducer:{
        useReduce,
    },
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;