import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "30.00"
};

const sumInputSlice = createSlice({
  name: 'sumInputVal',
  initialState,
  reducers: {
    setVal: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { setVal } = sumInputSlice.actions;
export default sumInputSlice.reducer;