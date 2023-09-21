import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
  searchingDone: false,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", (trackID) => {
  console.log("trackID:", trackID);

  return axios
    .get(`https://tracking.bosta.co/shipments/track/${trackID}`)
    .then((response) => {
      //redirect page
      return response.data;
    });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // const {} = action.payload
      state.loading = false;
      state.users = action.payload;
      state.error = "";
      state.searchingDone = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
