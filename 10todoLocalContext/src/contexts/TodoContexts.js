import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //  Main Properties
    todos: [
        {
            id:1,
            todo: "Todo Message",
            completed: false
        }
    ],
    // Functionaility -> in this we cant write function just write their names
    addTodo: (todo) => {},
    updatedTodo : (id,todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id) =>{}
});

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider