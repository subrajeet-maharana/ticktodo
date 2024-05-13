import React, { useState } from 'react';
const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add new todo..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
      />
    </form>
  );
};

const TodoItem = ({ text, isCrossed, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div
        className={`flex items-center ${isCrossed ? "line-through" : ""}`}
        onClick={toggleTodo}
      >
        <input
          type="checkbox"
          className="mr-2 cursor-pointer"
          checked={isCrossed}
          onChange={toggleTodo}
        />
        <span>{text}</span>
      </div>
      <button
        onClick={deleteTodo}
        className="text-red-600 hover:text-red-800 focus:outline-none"
      >
        ❌
      </button>
    </div>
  );
};

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          isCrossed={todo.isCrossed}
          toggleTodo={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { text: "Build Todo App", isCrossed: false },
    { text: "Have Dinner", isCrossed: true },
    { text: "Read The Psychology of Money", isCrossed: false },
    { text: "Pre Sleeping Routine", isCrossed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, isCrossed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isCrossed: !todo.isCrossed };
      }
      return todo;
    });
    setTodos(newTodos);
  };


  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-xl font-bold mb-4">Todos</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
