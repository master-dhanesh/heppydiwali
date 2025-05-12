import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
const App = () => {
    const [users, setusers] = useState([
        { name: "John", age: 12 },
        { name: "Ankur", age: 32 },
        { name: "Ayush", age: 22 },
    ]);
    return (
        <div>
            <Create />
            <Read users={users} setusers={setusers} />
            {/* Read(users,setusers) */}
        </div>
    );
};

export default App;
