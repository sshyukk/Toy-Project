import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {props.todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id}></TodoListItem>
      ))}
    </div>
  );
};

export default TodoList;

// 투두 리스트에서 투두 리스트 아이템을 관리한다.
