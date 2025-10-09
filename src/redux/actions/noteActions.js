export const ADD_NOTE = "Add Note";
export const DELETE_NOTE = "Delete Note";

export const addNote = (note)=>({note, type:ADD_NOTE});
export const deleteNote =(index)=>({index, type:DELETE_NOTE})