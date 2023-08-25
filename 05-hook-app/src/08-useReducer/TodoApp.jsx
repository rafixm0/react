
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from "../hooks/useTodo";


export const TodoApp = () => {

    const initialState = [];

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, onToggleTodo, handleNewTodo } = useTodo(initialState);
 
    

  return (
    <>
        <h1>TodoApp { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
        <hr />
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
    </>
  )
}
