import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;

// 할 일을 입력할 수 있는 컴포넌트.
// 인풋을 사용하려면 무조건 form 태그와 같이 사용해야하는가.
