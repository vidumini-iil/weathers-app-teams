import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    notification: boolean,
    activeCity: string | null
}

const initialState:IInitialState = {
    notification: false,
    activeCity: null
};

export const notificationSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setNotification: (state:IInitialState, action: PayloadAction<IInitialState>) => {
            state.notification= action.payload.notification
            state.activeCity= action.payload.activeCity  
        }
    },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
