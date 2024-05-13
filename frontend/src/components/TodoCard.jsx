import React, { useState } from 'react';
import Block from './Block';

const TodoCard = () => {
    const [todos, setTodos] = useState([
        { text: "Build Todo App", isCrossed: false },
        { text: "Have Dinner", isCrossed: true },
        { text: "Read The Psychology of Money", isCrossed: false },
        { text: "Pre Sleeping Routine", isCrossed: false },
    ]);
    return (
        <div>
            <h1>Todos</h1>
            {todos.map(todo => (
                <Block
                    key={todo.text} // Adding a unique key prop
                    text={todo.text}
                    isCrossed={todo.isCrossed}
                />
            ))}
        </div>
    );
};

export default TodoCard;
