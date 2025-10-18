
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState={
    todos:[
    ]
}
//Fetch data using createAsyncThunk in redux 
 export const getInitialSatatAsync = createAsyncThunk("todo/getInitialState",
    (arg,thunkAPI)=>{
//     fetch("http://localhost:4100/api/todos")
//   .then(res=>res.json())
//   .then(parseData=>{
//     console.log(parseData)
//     thunkAPI.dispatch(actions.setInitialState(parseData))
    const data = fetch("http://localhost:4100/api/todos")
     .then(res=>res.json()) // this return promise
     return data
 })
  // Creating the POST method 
  export const addTodoAsync = createAsyncThunk("todo/addTodo",async(payload)=>{
     const data = await fetch("http://localhost:4100/api/todos",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            text:payload,
            completed:false
        })
     })
     return data.json();
  })

//creating reducer using redux/toolkit
const todoSlice = createSlice({
    name:"Todo",
    initialState:initialState,
    reducers:{
        add:(state, action)=>{
            state.todos.push({
                text:action.payload,
                completed:false
            })
        },
        toggle:(state,action)=>{
             state.todos.map((todo,i)=>{
                if(i === action.payload){
                    todo.completed = !todo.completed;
                }
                return todo
             })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getInitialSatatAsync.fulfilled,(state,action)=>{
            // console.log("promise id fullfilled")
            // console.log(action.payload)
            state.todos = [...action.payload]
        })
        .addCase(addTodoAsync.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.todos.push(action.payload)
        })
    }
})

 export const todoReducer = todoSlice.reducer;
 export const actions = todoSlice.actions;
 export const todoSelector = (state)=>state.todoReducer.todos;
// create reducer usind redux
// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i===action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }