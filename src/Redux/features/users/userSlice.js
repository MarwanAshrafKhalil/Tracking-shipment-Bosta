import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  provider: "",
  CurrentStatus: {},
  PromisedDate: "",
  TrackingNumber: "",
  TransitEvents: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", (trackID) => {
  return axios
    .get(`https://tracking.bosta.co/shipments/track/${trackID}`)
    .then((response) => {
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
      const {
        provider,
        CurrentStatus,
        PromisedDate,
        TrackingNumber,
        TransitEvents,
      } = action.payload;
      state.loading = false;
      state.users = action.payload;
      state.provider = provider;
      state.CurrentStatus = CurrentStatus;
      state.PromisedDate = PromisedDate;
      state.TrackingNumber = TrackingNumber;
      state.TransitEvents = TransitEvents;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
