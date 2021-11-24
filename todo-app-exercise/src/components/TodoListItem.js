import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import classnames from 'classnames';
import './TodoListItem.scss';

const TodoListItem = (props) => {
  const { text, checked } = props.todo;
  return (
    <div className="TodoListItem">
      <div className={classnames('checkbox', { checked })}>
        {props.todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;

// classnames 모듈은 여러 클래스를 추가할 수가 있고,
// 특정 값이 true/false임에 따라 클래스명을 추가하거나, 추가하지 않도록 하는 것을 간단히 구현할 수 있게 해준다.
