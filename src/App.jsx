import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo.jsx";
import { IncompleteTodos } from "./components/IncompleteTodos.jsx";
import { CompleteTodos } from "./components/CompleteTodos.jsx";
import { EditTodos } from "./EditTodos";

export const App = () => {
  // タスク登録
  // オブジェクトとして扱い、タイトルと詳細はプロパティとして初期値を空登録
  const [todoContents, setTodoContents] = useState({
    title: "",
    date: "",
    detail: "",
    status: "",
  });
  // 未完了タスク
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了タスク 
  const [completeTodos, setCompleteTodos] = useState([]);



  // タスク入力時イベント_タイトル
  // タイトルはevent.target.valueで取得、他はuseStateの値から引用する
  const onChangeTodoTitle = (event) => {
    setTodoContents({ ...todoContents, title: event.target.value });
  };
  // タスク入力時イベント_期限
  // 詳細はevent.target.valueで取得、他はuseStateの値から引用する
  const onChangeTodoDate = (event) => {
    setTodoContents({ ...todoContents, date: event.target.value });
  };
  // タスク入力時イベント_詳細
  // 詳細はevent.target.valueで取得、他はuseStateの値から引用する
  const onChangeTodoDetail = (event) => {
    setTodoContents({ ...todoContents, detail: event.target.value });
  };


  // タスク登録ボタン押下時イベント
  const onClickAdd = () => {
    if (todoContents.title === "") return alert("本当にやることないの...？"); //タイトルを何も入力しなかった時はアラートを表示
    todoContents.status = "waiting" //登録時のステータスは未着手状態とする
    const newTodos = [...incompleteTodos, todoContents]; //新規未完了タスク＝既存タスク＋新規追加タスク
    setIncompleteTodos(newTodos);//useStateで未完了タスクの状態を変更
    //追加ボタン押したら入力項目を空にする
    setTodoContents({
      title: "",
      date: "",
      detail: "",
      status: "",
    });
  };
  //削除ボタンイベント
  const onClickDeleteIncomplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickDeleteComplete = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  };
  // 完了ボタンイベント
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    todoContents.status = "done"; //完了ステータスに変更
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  // 戻すボタンイベント
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    completeTodos[index].status = 'waiting'; //未完了ステータスに変更
    const newIncompletetodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompletetodos);
  };


  // ----------------------------編集--------------------------------
  /* 
    //未完了エリアでのタイトル編集
    const onChangeIncompleteTitle = (e, index) => {
      const newIncompleteTodosTitle = [...incompleteTodos];
      newIncompleteTodosTitle.splice(index, 1, { ...incompleteTodos[index], title: e.target.value });
      setIncompleteTodos(newIncompleteTodosTitle);
    };
    //未完了エリアでの期限編集
    const onChangeIncompleteDate = (e, index) => {
      const newIncompleteTodosDate = [...incompleteTodos];
      newIncompleteTodosDate.splice(index, 1, { ...incompleteTodos[index], date: e.target.value });
      setIncompleteTodos(newIncompleteTodosDate);
    };
  
    //未完了エリアでの詳細編集
    const onChangeIncompleteDetail = (e, index) => {
      const newIncompleteTodosDetail = [...incompleteTodos];
      newIncompleteTodosDetail.splice(index, 1, { ...incompleteTodos[index], detail: e.target.value });
      setIncompleteTodos(newIncompleteTodosDetail);
    };
  
    //未完了エリアでのステータス編集
    const onChangeIncompleteStatus = (e, index) => {
      const newIncompleteTodosStatus = [...incompleteTodos];
      newIncompleteTodosStatus.splice(index, 1, { ...incompleteTodos[index], status: e.target.value });
      setIncompleteTodos(newIncompleteTodosStatus);
    };
  
  
    //完了エリアでのタイトル編集
    const onChangeCompleteTitle = (e, index) => {
      const newCompleteTodosTitle = [...completeTodos];
      newCompleteTodosTitle.splice(index, 1, { ...completeTodos[index], title: e.target.value });
      setCompleteTodos(newCompleteTodosTitle);
    };
    //完了エリアでの期限編集
    const onChangeCompleteDate = (e, index) => {
      const newCompleteTodosDate = [...completeTodos];
      newCompleteTodosDate.splice(index, 1, { ...completeTodos[index], date: e.target.value });
      setCompleteTodos(newCompleteTodosDate);
    };
    //完了エリアでの詳細編集
    const onChangeCompleteDetail = (e, index) => {
      const newCompleteTodosDetail = [...completeTodos];
      newCompleteTodosDetail.splice(index, 1, { ...completeTodos[index], detail: e.target.value });
      setCompleteTodos(newCompleteTodosDetail);
    };
    */


  // ステータス絞り込み機能
  // もっと違うやり方にしていく
  const onChangeFilteredTodos = (e) => {
    console.log(e.target.value);
    if (e.target.value == 'all') {
      var todoElements = document.getElementsByClassName("incomplete-todo");
      for (var i = 0; i < incompleteTodos.length; i++) {
        todoElements[i].style.display = "flex"
      }
    }
    else {
      for (var i = 0; i < incompleteTodos.length; i++) {
        if (incompleteTodos[i].status == e.target.value) {
          document.getElementById(`incomplete-${i}`).style.display = "flex";
        } else {
          document.getElementById(`incomplete-${i}`).style.display = "none";
        }
      }
    }
  };

  return (
    <>
      <div className="wrapper">
        <InputTodo
          todoContents={todoContents}
          onChangeTitle={onChangeTodoTitle}
          onChangeDate={onChangeTodoDate}
          onChangeDetail={onChangeTodoDetail}
          onClick={onClickAdd}
          disabled={incompleteTodos.length >= 5}
        />
        {incompleteTodos.length >= 5 && (
          <p style={{ color: "red" }}>タスクを消化しましょう。。</p>
        )}
        <IncompleteTodos
          todos={incompleteTodos}
          setTodos={setIncompleteTodos}
          editTodos={EditTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDeleteIncomplete}
          onChangeFilteredTodos={onChangeFilteredTodos}
        />
        <CompleteTodos
          todos={completeTodos}
          setTodos={setCompleteTodos}
          editTodos={EditTodos}
          onClickBack={onClickBack}
          onClickDelete={onClickDeleteComplete}
        />
      </div>
    </>
  );
};
