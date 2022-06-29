import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo.jsx";
import { IncompleteTodos } from "./components/IncompleteTodos.jsx";
import { CompleteTodos } from "./components/CompleteTodos.jsx";

export const App = () => {
  const [todoContents, setTodoContents] = useState({
    title: "",
    detail: "",
  });
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoTitle = (event) => {
    setTodoContents({ title: event.target.value, detail: todoContents.detail });
  }
  const onChangeTodoDetail = (event) => {
    setTodoContents({ title: todoContents.title, detail: event.target.value });
  }

  const onClickAdd = () => {
    if (todoContents.title === "") return alert("本当にやることないの...？"); //何も入力しなかった時はアラートを表示
    const newTodos = [...incompleteTodos, todoContents]; //初期値＋追加入力値
    setIncompleteTodos(newTodos);
    //追加ボタン押したら入力項目を空にする
    setTodoContents({
      title: "",
      detail: "",
    });
  };
  //削除ボタンイベント
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了ボタンイベント
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  // 戻すボタンイベント
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompletetodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompletetodos);
  };
  //未完了エリアでのタイトル編集
  const onChangeIncompleteTitle = (e, index) => {
    const newIncompleteTodosTitle = [...incompleteTodos];
    newIncompleteTodosTitle.splice(index, 1, { title: e.target.value, detail: incompleteTodos[index].detail });
    setIncompleteTodos(newIncompleteTodosTitle);
  }
  //未完了エリアでの詳細編集
  const onChangeIncompleteDetail = (e, index) => {
    const newIncompleteTodosDetail = [...incompleteTodos];
    newIncompleteTodosDetail.splice(index, 1, { title: incompleteTodos[index].title, detail: e.target.value });
    setIncompleteTodos(newIncompleteTodosDetail);
  }
  //完了エリアでのタイトル編集
  const onChangeCompleteTitle = (e, index) => {
    const newCompleteTodosTitle = [...completeTodos];
    newCompleteTodosTitle.splice(index, 1, { title: e.target.value, detail: completeTodos[index].detail });
    setCompleteTodos(newCompleteTodosTitle);
  }
  //完了エリアでの詳細編集
  const onChangeCompleteDetail = (e, index) => {
    const newCompleteTodosDetail = [...completeTodos];
    newCompleteTodosDetail.splice(index, 1, { title: completeTodos[index].title, detail: e.target.value });
    setCompleteTodos(newCompleteTodosDetail);
  }


  return (
    <>
      <div className="wrapper">
        <InputTodo
          todoContents={todoContents}
          onChangeTitle={onChangeTodoTitle}
          onChangeDetail={onChangeTodoDetail}
          onClick={onClickAdd}
          disabled={incompleteTodos.length >= 5}
        />
        {incompleteTodos.length >= 5 && (
          <p style={{ color: "red" }}>タスクを消化しましょう。。</p>
        )}
        <IncompleteTodos
          todos={incompleteTodos}
          onChangeTitle={onChangeIncompleteTitle}
          onChangeDetail={onChangeIncompleteDetail}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <CompleteTodos
          todos={completeTodos}
          onChangeTitle={onChangeCompleteTitle}
          onChangeDetail={onChangeCompleteDetail}
          onClickBack={onClickBack} />
      </div>
    </>
  );
};
