import { useState } from "react";
import Card from "./Card.jsx";

export default function TodoList({todos, onChangeTodo, onDeleteTodo}) {
    return (
        <ul style={{listStyle: "none", padding: 0}}>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Card>
                        <Todo todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
                    </Card>
                </li>
              
            ))}
        </ul>
    );
}

function Todo({todo, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if(isEditing) {
        todoContent = (
            <>
                <input
                    style={{color: "black", backgroundColor: "white"}}
                    value={todo.text}
                    onChange={(e) => {
                        onChange({
                            ...todo,
                            text: e.target.value,
                        });
                    }}
                />
                <br/>
                <button style={{color: "white", backgroundColor: "blue"}} onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.text}
                <br/>
                <button style={{color: "white", backgroundColor: "blue"}} onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <label>
            <input
                style={{accentColor: "#ADD8E6"}}
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                    onChange({
                        ...todo,
                        done: e.target.checked,
                    });
                }}
            />
            {todoContent}
            <br/>
            <button style={{color: "white", backgroundColor: "red"} }onClick={() => onDelete(todo.id)}>Delete</button>
        </label>
    );
}