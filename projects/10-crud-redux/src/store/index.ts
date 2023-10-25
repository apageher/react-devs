import { Middleware, configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/slice' 

//Con los middleWare tenemos la posibilidad de ejecutar acciones antes o despues de cambiar el estado
//sin la necesidad de añadir esta lógica en el reducer
const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;