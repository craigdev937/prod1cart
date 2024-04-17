import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ProdAPI } from "./ProdAPI";

export const RootReducer = configureStore({
    reducer: {
        [ProdAPI.reducerPath]: ProdAPI.reducer,
    },      // gDM = getDefaultMiddleware
    middleware: (gDM) => gDM().concat(ProdAPI.middleware),
});

setupListeners(RootReducer.dispatch);
export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;


