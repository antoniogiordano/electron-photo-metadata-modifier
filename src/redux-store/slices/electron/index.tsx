import { createSlice } from "@reduxjs/toolkit";
import * as selectors from "./selectors";
import { ElectronState, ElectronIpcRequestAction } from "./interfaces";
import * as extraActions from "../../extra-actions";
import * as sagas from "./sagas";

const initialState: ElectronState = {
  isLoading: {},
};

export const electronStore = createSlice({
  name: "electron",
  initialState,
  reducers: {
    electronIpcRequest: (state, action: ElectronIpcRequestAction) => {
      state.isLoading[
        `${action.payload.requestType}:${action.payload?.id ?? 1}`
      ] = true;
    },
  },
});

export { selectors, sagas };
