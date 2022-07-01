import React from "react";

export const TodoStatus = (props) => {
    const { onChangeStatus, index } = props;
    return (
        <>
            <select className="status" onChange={(e) => onChangeStatus(e, index)}>
                <option value="todo">まだ</option>
                <option value="doing">今やってる</option>
                <option value="pending">ちょっと待って...！</option>
            </select>
        </>
    );
}; 