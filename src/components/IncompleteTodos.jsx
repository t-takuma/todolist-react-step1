import React from "react";
import { TodoStatus } from "./TodoStatus";

export const IncompleteTodos = (props) => {
  const { todos, onChangeTitle, onChangeDate, onChangeDetail, onChangeStatus, onClickComplete, onClickDelete, onChangeFilteredTodos } = props;
  return (
    <div className="incomplete">
      <p className="title">Todo</p>
      <div>
        <div>
          <select defaultValue="all" onChange={(e) => onChangeFilteredTodos(e)}>
            <option value="all">すべて</option>
            <option value="todo">未着手</option>
            <option value="doing">進行中</option>
            <option value="pending">保留</option>
          </select>
        </div>
        {todos.map((todo, index) => {
          return (
            <>
              <div key={`${index}-${todo.title}`} id={`incomplete-${index}`} className="list-row incomplete-todo">
                <div className="title-area">
                  <p className="index"><span>#-{index + 1}</span></p>
                  <input
                    className="todotitle"
                    value={todo.title}
                    placeholder="タスク名を入力..."
                    onChange={(e) => onChangeTitle(e, index)}
                  />
                  <input className="deadline"
                    type="date"
                    value={todo.date}
                    onChange={(e) => onChangeDate(e, index)}
                  />
                  <TodoStatus onChangeStatus={onChangeStatus} index={index} />
                </div>
                <textarea
                  className="detail-area"
                  value={todo.detail}
                  placeholder="詳細を入力..."
                  onChange={(e) => onChangeDetail(e, index)} />
                <div className="button-area">
                  <button onClick={() => onClickComplete(index)}><i className="fas fa-check"></i></button>
                  <button onClick={() => onClickDelete(index)}><i className="fas fa-trash-alt"></i></button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div >
  );
};
