import React, { useState } from 'react';
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
  return (
    <>
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
};

export default App;
