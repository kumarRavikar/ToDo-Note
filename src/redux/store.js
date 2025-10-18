
// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
//import {  noteNotificationReducer } from "./reducers/noteNotyReducer";
// creating store using redux
// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })
  //creating store using redux toolkit
export const store =configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer,
       // noteNotificationReducer
    },
   // middleware:[...getDefaultMiddleware(),loggerMiddleware] //this is the older way to use and allow default middleware for thunk
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,        // this is the latest way to use and allow default middleware for thunk
      thunk: true,
    }).concat(loggerMiddleware),
})

