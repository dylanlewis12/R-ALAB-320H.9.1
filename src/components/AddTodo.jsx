import { useState } from 'react';

export default function AddTodo({onAddTodo}) {
   const [text, setText] = useState('');
   
   return (
    <>
        <input
            style={{color: "black", backgroundColor: "white", marginRight: "10px"}}
            placeholder='Add todo item'
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button
            style={{color: "white", backgroundColor: "green"}}
            onClick={() => {
                setText('');
                onAddTodo(text);
            }}>
            Add
        </button>
    </>
   );
}