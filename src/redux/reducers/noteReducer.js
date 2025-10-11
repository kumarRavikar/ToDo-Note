import { createSlice } from "@reduxjs/toolkit";

// import { ADD_NOTE,DELETE_NOTE } from "../actions/noteActions";
const initialState = {notes:[]};

     //creating reducer using redux toolkit
  const noteSlice = createSlice({
    name:"note",
    initialState:initialState,
    reducers:{
      add:(state,action)=>{
        state.notes.push({
           text:action.payload,
            createdOn: new Date()
        })
      } ,
      delete:(state, action)=>{
        state.notes.splice(action.payload,1)
      } 
    }
  })

  export const noteReducer = noteSlice.reducer;
  export const actions = noteSlice.actions;
  export const notSelector = (state)=>state.noteReducer.notes;
     // creating reducers using redux 
//  export function noteReducer(state=initialState, action){
//    switch(action.type){
//     case ADD_NOTE:
//         return{
//             ...state,notes:[...state.notes,{note:action.note,createdOn:new Date()}]
//         }
//     case DELETE_NOTE:
//         state.notes.splice(action.index,1)
//         return{
//             ...state,
//             notes:[...state.notes]
//         }    
//         default:
//             return state;
//    }
// }