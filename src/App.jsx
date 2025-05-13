import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
    const [todos, settodos] = useState([
        { id: 1, title: "Kamm krle bhai", isCompleted: false },
    ]);

    return (
        <>
            <Create todos={todos} settodos={settodos} />
            <Read todos={todos} settodos={settodos} />
        </>
    );
};

export default App;
