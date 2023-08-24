import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {

    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: 'Recolectar la piedra del alma',
        //     done: false,
        // }
    ];

    // useTodo Hook
    // todos,

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) );
    
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const onToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    

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
