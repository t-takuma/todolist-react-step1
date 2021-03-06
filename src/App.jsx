import React, { useState } from "react";
import "./destyle.css";
import "./styles.css";
import { InputTodo } from "./components/InputTodo.jsx";
import { IncompleteTodos } from "./components/IncompleteTodos.jsx";
import { CompleteTodos } from "./components/CompleteTodos.jsx";

export const App = () => {
  // タスク登録
  // オブジェクトとして扱い、タイトルと詳細はプロパティとして初期値を空登録
  const [todoContents, setTodoContents] = useState({
    id: "",
    title: "",
    date: "",
    detail: "",
    status: ""
  });
  // 未完了タスク
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了タスク
  const [completeTodos, setCompleteTodos] = useState([]);

  function getUniqueStr(myStrong) {
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
  }

  // ----------------------------タスク登録--------------------------------
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
    todoContents.status = "waiting"; //登録時のステータスは未着手状態とする
    todoContents.id = getUniqueStr();
    const newTodos = [...incompleteTodos, todoContents]; //新規未完了タスク＝既存タスク＋新規追加タスク
    setIncompleteTodos(newTodos); //useStateで未完了タスクの状態を変更
    //追加ボタン押したら入力項目を空にする
    setTodoContents({
      id: "",
      title: "",
      date: "",
      detail: "",
      status: ""
    });
  };


  // ----------------------------タスク完了/削除/戻し--------------------------------
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

    completeTodos[index].status = "waiting"; //未完了ステータスに変更
    const newIncompletetodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompletetodos);
  };

  // ----------------------------タスク編集--------------------------------
  // タスク編集_未完了タスク
  const EditIncompleteTodos = (e, index, property) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1, { ...incompleteTodos[index], [property]: e.target.value });
    setIncompleteTodos(newTodos);
  };
  // タスク編集_完了タスク
  const EditCompleteTodos = (e, index, property) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1, { ...completeTodos[index], [property]: e.target.value });
    setCompleteTodos(newTodos);
  };
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

  // ----------------------------タスク絞り込み（ステータス）--------------------------------
  // もっと違うやり方にしていく
  const onChangeFilteredTodos = (e) => {
    if (e.target.value === "all") {
      var todoElements = document.getElementsByClassName("incomplete-todo");
      for (var i = 0; i < incompleteTodos.length; i++) {
        todoElements[i].style.display = "flex";
      }
    } else {
      for (var i = 0; i < incompleteTodos.length; i++) {
        if (incompleteTodos[i].status === e.target.value) {
          document.getElementById(`incomplete-${i}`).style.display = "flex";
        } else {
          document.getElementById(`incomplete-${i}`).style.display = "none";
        }
      }
    }
  };

  const statuses = [
    { value: "all", text: "すべて" },
    { value: "waiting", text: "未着手" },
    { value: "doing", text: "進行中" },
    { value: "pending", text: "放置" },
  ];

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


        <div className="incomplete">
          <p className="title">Todo</p>
          <div className="filter-status">
            {statuses.map((status) => {
              return (
                <button key={`${status.value}`} onClick={(e) => onChangeFilteredTodos(e)} value={status.value}>{status.text}</button>
              );
            })}
          </div>
          {incompleteTodos.map((incompleteTodo, index) => {
            return (
              < IncompleteTodos
                key={incompleteTodo.id}
                index={index}
                todo={incompleteTodo}
                editIncompleteTodos={EditIncompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDeleteIncomplete}
                onChangeFilteredTodos={onChangeFilteredTodos}
              />
            );
          })}
        </div>

        <div className="complete">
          <p className="title">Done</p>
          {completeTodos.map((completeTodo, index) => {
            return (
              <CompleteTodos
                key={completeTodo.id}
                index={index}
                todo={completeTodo}
                editCompleteTodos={EditCompleteTodos}
                onClickBack={onClickBack}
                onClickDelete={onClickDeleteComplete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
