import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onChangeTitle, onChangeDetail, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete">
      <p className="title">Todo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <>

              <div key={todo.title} className="list-row">
                <div className="title-area">
                  <span className="index">#-{index + 1}</span>
                  <input
                    className="todotitle"
                    value={todo.title}
                    onChange={(e) => onChangeTitle(e, index)}
                  />
                  <select className="status">
                    <option value="未着手">まだ</option>
                    <option value="着手中">今やってる</option>
                    <option value="保留">ちょっと待って...！</option>
                  </select>
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
      </ul>
    </div>
  );
};
