import React from "react";

export const CompleteTodos = (props) => {
  const { todos, setTodos, editTodos, onClickBack, onClickDelete } = props;
  return (
    <>
      <div className="complete">
        <p className="title">Done</p>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={`complete-${index}`} id={`complete-${index}`} className="list-row">
                <div className="title-area">
                  <p className="index"><span>#-{index + 1}</span></p>
                  <input
                    className="todotitle"
                    value={todo.title}
                    onChange={(e) => editTodos(e, index, todos, setTodos, 'title')}
                  />
                  <input className="deadline"
                    type="date"
                    value={todo.date}
                    onChange={(e) => editTodos(e, index, todos, setTodos, 'date')}
                  />
                </div>
                <textarea
                  className="detail-area"
                  value={todo.detail}
                  placeholder="詳細を入力..."
                  onChange={(e) => editTodos(e, index, todos, setTodos, 'detail')}
                />
                <div className="button-area">
                  <button onClick={() => onClickBack(index)}><i className="fa fa-undo"></i></button>
                  <button onClick={() => onClickDelete(index)}><i className="fas fa-trash-alt"></i></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
