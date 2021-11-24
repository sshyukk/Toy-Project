import './TodoTemplate.scss';

const TodoTemplate = (props) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default TodoTemplate;

// 하위 컴포넌트를 가운데 정렬 하면서
// 전체 스타일을 지정할 수 있는 래퍼 컴포넌트.
