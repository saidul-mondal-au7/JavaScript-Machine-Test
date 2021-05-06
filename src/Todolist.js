import React from 'react';
import Todo from './Todo';


const Todolist = ({ todos }) => {
   return (
       <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo} /> )}
       </div>
        )
}


export default Todolist;