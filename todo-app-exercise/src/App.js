import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트를 잘하고 싶다. api 연동이란?',
      checked: true,
    },
    {
      id: 2,
      text: '자바스크립트도 잘하고 싶다. 비동기 처리도.',
      checked: true,
    },
    {
      id: 3,
      text: '타입스크립트도 제대로 사용해보자.',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (value) => {
      const todo = {
        id: nextId.current,
        text: value,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
};

export default App;
