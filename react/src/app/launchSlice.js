import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import launchServices from "../services/launchServices";

export const fetchLaunches = createAsyncThunk(
  "launches/fetchLaunches",
  async (_, thunkAPI) => {
    try {
      const response = await launchServices.getAllLaunches(25, 0);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const launchesSlice = createSlice({
  name: "launches",
  initialState: {
    launches: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLaunches.fulfilled, (state, action) => {
        state.launches = action.payload;
        state.loading = false;
      })
      .addCase(fetchLaunches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default launchesSlice.reducer;
