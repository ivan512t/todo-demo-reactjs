import * as React from "react";
import { Input } from "./input";
import { List } from "./list";
import { makeStorage } from "./utils";

let storage = makeStorage("todos");

export function App() {
    let [todos, setTodos] = React.useState(() => storage.get() ?? []);

    React.useEffect(() => {
        storage.set(todos);
    }, [todos]);

    function add(newTodo) {
        setTodos([...todos, newTodo]);
    }

    function remove(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function edit(updatedTodo) {
        let index = todos.findIndex((todo) => todo.id === updatedTodo.id);
        let newTodos = [...todos];
        newTodos[index] = updatedTodo;
        setTodos(newTodos);
    }

    return (
        <div className="pt-16 max-w-sm mx-auto grid gap-6">
            <h1 className="font-bold text-3xl pb-2">Todo List</h1>
            <Input add={add} />
            <List todos={todos} remove={remove} edit={edit} />
        </div>
    );
}
