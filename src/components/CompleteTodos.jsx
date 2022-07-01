import React from "react";

export const CompleteTodos = (props) => {
  const { onChangeTitle, onChangeDate, onChangeDetail, todos, onClickBack, onClickDelete } = props;
  return (
    <div className="complete">
      <p className="title">Done</p>
      <div>
        {todos.map((todo, index) => {
          return (
            <div key={todo.id} className="list-row">
              <div className="title-area">
                <p className="index"><span>#-{index + 1}</span></p>
                <input
                  className="todotitle"
                  value={todo.title}
                  onChange={(e) => onChangeTitle(e, index)} />
                <input className="deadline"
                  type="date"
                  value={todo.date}
                  onChange={(e) => onChangeDate(e, index)}
                />
              </div>
              <textarea
                className="detail-area"
                value={todo.detail}
                placeholder="詳細を入力..."
                onChange={(e) => onChangeDetail(e, index)} />
              <div className="button-area">
                <button onClick={() => onClickBack(index)}><i className="fa fa-undo"></i></button>
                <button onClick={() => onClickDelete(index)}><i className="fas fa-trash-alt"></i></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
