import React from "react";
import { TodoStatus } from "./TodoStatus";

export const IncompleteTodos = (props) => {
  const { todos, editIncompleteTodos, onClickComplete, onClickDelete, onChangeFilteredTodos } = props;
  const statuses = [
    { value: "all", text: "すべて" },
    { value: "waiting", text: "未着手" },
    { value: "doing", text: "進行中" },
    { value: "done", text: "放置" },
  ];
  return (
    <>
      <div className="incomplete">
        <p className="title">Todo</p>
        <div className="filter-status">
          {statuses.map((status) => {
            return (
              <>
                <button key={`${status.value}`} onClick={(e) => onChangeFilteredTodos(e)} value={status.value}>{status.text}</button>
              </>
            );
          })}
        </div>
        {todos.map((todo, index) => {
          return (
            <>
              <div key={`incomplete-${index}}`} id={`incomplete-${index}`} className="list-row incomplete-todo">
                <div className="title-area">
                  <p className="index"><span>#-{index + 1}</span></p>
                  <input
                    className="todotitle"
                    value={todo.title}
                    placeholder="タスク名を入力..."
                    onChange={(e) => editIncompleteTodos(e, index, 'title')}
                  />
                  <input
                    className="deadline"
                    type="date"
                    value={todo.date}
                    onChange={(e) => editIncompleteTodos(e, index, 'date')}
                  />
                  <TodoStatus
                    editTodos={editIncompleteTodos}
                    index={index} />
                </div>
                <textarea
                  className="detail-area"
                  value={todo.detail}
                  placeholder="詳細を入力..."
                  onChange={(e) => editIncompleteTodos(e, index, 'detail')} />
                <div className="button-area">
                  <button onClick={() => onClickComplete(index)}><i className="fas fa-check"></i></button>
                  <button onClick={() => onClickDelete(index)}><i className="fas fa-trash-alt"></i></button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
