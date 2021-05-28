import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
    contry: string | null,
}

const initialState:IinitialState = {
    contry: null,

};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeContry: (state:IinitialState, action: PayloadAction<string>) => {
    
            state.contry= action.payload
                
        }
    },
});

export const { changeContry } = searchSlice.actions;
export default searchSlice.reducer;
