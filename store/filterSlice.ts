import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface FilterState {
  filter: string;
}

// Define the initial state using that type
const initialState: FilterState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
