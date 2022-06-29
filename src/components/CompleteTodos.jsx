import React from "react";

export const CompleteTodos = (props) => {
  const { onChangeTitle, onChangeDetail, todos, onClickBack } = props;
  return (
    <div className="complete">
      <p className="title">Done</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo.title} className="list-row">
              <div className="title-area">
                <span className="index">#-{index + 1}</span>
                <input
                  className="todotitle"
                  value={todo.title}
                  onChange={(e) => onChangeTitle(e, index)} />
              </div>
              <textarea
                className="detail-area"
                value={todo.detail}
                placeholder="詳細を入力..."
                onChange={(e) => onChangeDetail(e, index)} />
              <div className="button-area">
                <button onClick={() => onClickBack(index)}><i class="fa fa-undo"></i></button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
