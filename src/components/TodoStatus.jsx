import React from "react";

export const TodoStatus = (props) => {
    const { todos, setTodos, editTodos, index } = props;
    return (
        <>
            <select className="status" onChange={(e) => editTodos(e, index, todos, setTodos, 'status')}>
                <option value="waiting">まだ</option>
                <option value="doing">今やってる</option>
                <option value="pending">放置プレイ</option>
            </select>
        </>
    );
}; 