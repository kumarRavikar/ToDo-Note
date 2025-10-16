import { createSlice } from "@reduxjs/toolkit"
import { actions } from "./todoReducer";
import { noteActions } from "./noteReducer";
 const {add} = actions;
 const {addNote} = noteActions
 const initialState={
    message:null
 }
 const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers:{
        reset:(state, actions)=>{
            state.message=""
        }
    },
    extraReducers:(builder)=>{
       builder.addCase( add, (state, actions)=>{
               state.message = "Todo is Created"
        })
        .addCase(addNote,(state,actions)=>{
            state.message="Note is Created"
        })
    }
 })
 export const notificationReducer = notificationSlice.reducer;
 export const notificationAction = notificationSlice.actions.reset;
 export const notificationSelector = (state)=>state.notificationReducer.message;