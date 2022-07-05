import React from "react";

export const CompleteTodos = (props) => {
  const { todo, index, editCompleteTodos, onClickBack, onClickDelete } = props;
  return (
    <>
      <div id={`complete-${index}`} className="list-row">
        <div className="title-area">
          <p className="index"><span>#-{index + 1}</span></p>
          <input
            className="todotitle"
            value={todo.title}
            onChange={(e) => editCompleteTodos(e, index, 'title')}
          />
          <input className="deadline"
            type="date"
            value={todo.date}
            onChange={(e) => editCompleteTodos(e, index, 'date')}
          />
        </div>
        <textarea
          className="detail-area"
          value={todo.detail}
          placeholder="詳細を入力..."
          onChange={(e) => editCompleteTodos(e, index, 'detail')}
        />
        <div className="button-area">
          <button onClick={() => onClickBack(index)}><i className="fa fa-undo"></i></button>
          <button onClick={() => onClickDelete(index)}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </>
  );
};
