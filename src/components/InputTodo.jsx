import React from "react";

export const InputTodo = (props) => {
  const { todoContents, onChangeDate, onChangeTitle, onChangeDetail, onClick, disabled } = props;
  return (
    <>
      <div className="input-area">
        <p className="title">Add todo</p>
        <input
          className="todotitle"
          disabled={disabled}
          placeholder="タスク名を入力..."
          value={todoContents.title}
          onChange={onChangeTitle}
        />
        <input
          className="deadline"
          disabled={disabled}
          placeholder="期限を入力..."
          type="date"
          value={todoContents.date}
          onChange={onChangeDate}
        />
        <textarea
          className="detail"
          disabled={disabled}
          placeholder="詳細を入力..."
          value={todoContents.detail}
          onChange={onChangeDetail}
        />
        <div className="button-area">
          <button onClick={onClick}><span><i className="fas fa-plus"></i></span>Add</button>
        </div>
      </div>
    </>
  );
};
