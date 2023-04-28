import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./userData";
import selectedDataSlice from "./selectedData";
import showGraphSlice from "./showGraph";
const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    selectedData: selectedDataSlice.reducer,
    showGraph: showGraphSlice.reducer,
  },
});
export default store;
