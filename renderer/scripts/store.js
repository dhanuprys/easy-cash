import { configureStore } from '@reduxjs/toolkit';
import mainAppSlice from './reducers/mainAppSlice';
import toastSlice from './reducers/toastSlice';
import appSlice from './reducers/appSlice';

export default configureStore({
    reducer: {
        toast: toastSlice,
        mainApp: mainAppSlice,
        app: appSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['app/setApplicationSocket', 'app/notifyClientSocket'],
                // Ignore these field paths in all actions
                // ignoredActionPaths: ['app.ws', 'app.wsMessage'],
                // Ignore these paths in the state
                ignoredPaths: ['app.ws', 'app.wsMessage'],
            },
        }),
})