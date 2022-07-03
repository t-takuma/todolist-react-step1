// タスク編集
export const EditTodos = (e, index, todos, setTodos, property) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, { ...todos[index], [property]: e.target.value });
    setTodos(newTodos);
};