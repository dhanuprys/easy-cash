import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        ports: {},
        ws: null,
        wsMessage: null
    },
    reducers: {
        setApplicationPorts: (state, payload) => {
            state.ports = payload.payload;
        },
        setApplicationSocket: (state, payload) => {
            state.ws = payload.payload
        },
        notifyClientSocket: (state, payload) => {
            state.wsMessage = payload.payload;
        }
    }
});

export const { setApplicationPorts, setApplicationSocket, notifyClientSocket } = appSlice.actions;
export default appSlice.reducer;