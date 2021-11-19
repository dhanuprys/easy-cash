import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        ports: {},
        ws: null,
        wsMessage: null,
        version: ''
    },
    reducers: {
        setApplicationPorts: (state, payload) => {
            state.ports = payload.payload;
        },
        setApplicationSocket: (state, payload) => {
            state.ws = payload.payload
        },
        setVersion: (state, payload) => {
            state.version = payload.payload
        },
        notifyClientSocket: (state, payload) => {
            state.wsMessage = payload.payload;
        }
    }
});

export const { setApplicationPorts, setApplicationSocket, setVersion, notifyClientSocket } = appSlice.actions;
export default appSlice.reducer;