import React from "react";
import { TodoStatus } from "./TodoStatus";

export const IncompleteTodos = (props) => {
  const { todos, setTodos,/* onChangeTitle, onChangeDate, onChangeDetail, onChangeStatus */ editTodos, onClickComplete, onClickDelete, onChangeFilteredTodos } = props;
  return (
    <>
      <div className="incomplete">
        <p className="title">Todo</p>
        <div className="filter-status">
          <button onClick={(e) => onChangeFilteredTodos(e)} value="all">すべて</button>
          <button onClick={(e) => onChangeFilteredTodos(e)} value="waiting">未着手</button>
          <button onClick={(e) => onChangeFilteredTodos(e)} value="doing">進行中</button>
          <button onClick={(e) => onChangeFilteredTodos(e)} value="pending">放置プレイ</button>
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
                    onChange={(e) => editTodos(e, index, todos, setTodos, 'title')}
                  />
                  <input
                    className="deadline"
                    type="date"
                    value={todo.date}
                    onChange={(e) => editTodos(e, index, todos, setTodos, 'date')}
                  />
                  <TodoStatus
                    todos={todos}
                    setTodos={setTodos}
                    editTodos={editTodos}
                    index={index} />
                </div>
                <textarea
                  className="detail-area"
                  value={todo.detail}
                  placeholder="詳細を入力..."
                  onChange={(e) => editTodos(e, index, todos, setTodos, 'detail')} />
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
