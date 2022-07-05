import React from "react";

export const TodoStatus = (props) => {
    const { editTodos, index } = props;
    return (
        <>
            <select className="status" onChange={(e) => editTodos(e, index, 'status')}>
                <option value="waiting">まだ</option>
                <option value="doing">今やってる</option>
                <option value="pending">放置プレイ</option>
            </select>
        </>
    );
}; 