import * as React from "react";
import { Input } from "./input";
import { List } from "./list";

export function App() {
    let [todos, setTodos] = React.useState([]);

    return (
        <div className="pt-16 max-w-sm mx-auto grid gap-6">
            <h1 className="font-bold text-3xl pb-2">Todo List</h1>
            <Input onTodoAdd={(newTodo) => setTodos([...todos, newTodo])} />
            <List todos={todos} />
        </div>
    );
}
