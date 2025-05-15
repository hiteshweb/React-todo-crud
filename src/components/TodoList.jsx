import { useState } from "react";

const TodoList = ({todolist, deleteTodo, updateTodo}) => {
    const [editid, setEditId] = useState('');
    const [editText, setEditText] = useState('');

    const clearEditInfo = () => {
        setEditId('');
        setEditText('');
    }

    const setEditInfo = (todo) => {
        setEditId(todo.id);
        setEditText(todo.name);
    };

    const updateTodoInfo = () => {
        updateTodo({id:editid, name: editText});
        clearEditInfo();
    };

    return (
        <div className="todolist">
            <ul>
                {todolist.map((todo) => (
                    <li>
                        {editid === todo.id ? (
                            <>
                            <input type="text" name="edit" value={editText} onChange={(e) => setEditText(e.target.value)}/> 
                            <button type="button" onClick={() => updateTodoInfo()}>Update</button>
                            <button type="button" onClick={() => clearEditInfo('')}>Cancel</button>
                            </>
                        ) : 
                        <>
                        Id: {todo.id}, Name: {todo.name}, <button type="button" onClick={() => setEditInfo(todo)}> Edit</button><button onClick={() => deleteTodo(todo)}>Delete</button>
                        </>
                    }
                        
                    </li>
                    ))}
            </ul>
        </div>
    );
};

export default TodoList;