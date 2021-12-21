import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/rootReducer'; 

export const store = configureStore({
  reducer: rootReducer,
});




// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slice/authSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });
