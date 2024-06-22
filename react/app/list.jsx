import { Item } from "./item";

export function List({ todos, remove, edit }) {
    return (
        <ul className="grid gap-3">
            {todos.map((todo) => (
                <Item key={todo.id} todo={todo} remove={remove} edit={edit} />
            ))}
        </ul>
    );
}
