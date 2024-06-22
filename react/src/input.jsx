import * as React from "react";
import { makeID } from "./utils";

export function Input({ onTodoAdd }) {
    let [value, setValue] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onTodoAdd({ id: makeID(), value });
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                placeholder="Add a new task..."
                className="px-4 py-2 border rounded-md text-sm flex-1"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button className="px-4 py-2 bg-black rounded-md text-sm font-medium text-white">
                Add
            </button>
        </form>
    );
}
