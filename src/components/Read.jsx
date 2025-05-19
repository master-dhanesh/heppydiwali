import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Read = () => {
    const [todos, settodos] = useContext(todocontext);

    const DeleteHandler = (id) => {
        const filtedtodo = todos.filter((todo) => todo.id != id);
        settodos(filtedtodo);
        toast.error("Todo deleted!");
    };

    const rendertodos = todos.map((todo) => {
        return (
            <li
                key={todo.id}
                className="mb-2  flex justify-between items-center p-4 bg-gray-900 rounded"
            >
                <span className="text-xl font-thin">{todo.title}</span>
                <button
                    className="text-sm font-thin text-red-400"
                    onClick={() => DeleteHandler(todo.id)}
                >
                    Delete
                </button>
            </li>
        );
    });

    return (
        <div className="w-[40%] p-10">
            <h1 className="mb-10 text-5xl font-thin">
                <span className="text-pink-400">Pending</span> Todos
            </h1>
            <ol>{rendertodos}</ol>
        </div>
    );
};

export default Read;
