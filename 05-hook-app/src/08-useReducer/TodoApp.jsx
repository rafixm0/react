
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from "../hooks/useTodo";


export const TodoApp = () => {

    const initialState = [];

    const { todos, handleDeleteTodo, onToggleTodo, handleNewTodo } = useTodo(initialState);
 
    

  return (
    <div className="row">
        <div className="col-7">
            <TodoList 
                todos={ todos } 
                onDeleteTodo={ handleDeleteTodo }
                onToggleTodo={ onToggleTodo }
            />
        </div>
    
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd 
                onNewTodo={ handleNewTodo } 
            />
        </div>
    </div>
  )
}
