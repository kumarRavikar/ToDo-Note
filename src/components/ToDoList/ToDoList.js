import { useSelector, useDispatch } from "react-redux";
//import { toggleTodo } from "../../redux/actions/todoActions";
import { actions,todoSelector,getInitialSatatAsync } from "../../redux/reducers/todoReducer";
import "./ToDoList.css";
import { useEffect } from "react";

function ToDoList() {

  const todos=useSelector(todoSelector);
  const disptach = useDispatch();
  // const todos= store.getState().todos;
useEffect(()=>{
  disptach(getInitialSatatAsync())
  // fetch("http://localhost:4100/api/todos")
  // .then(res=>res.json())
  // .then(parseData=>{
  //   console.log(parseData)
  //   disptach(actions.setInitialState(parseData))
  // })
},[])
  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={index}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;