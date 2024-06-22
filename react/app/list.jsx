import { Item } from "./item";

export function List({ todos }) {
    return (
        <ul className="grid gap-3">
            {todos.map(({ id, value }) => (
                <Item key={id} text={value} />
            ))}
        </ul>
    );
}
