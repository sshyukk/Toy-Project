import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;

// 투두 리스트에서 투두 리스트 아이템을 관리한다.
