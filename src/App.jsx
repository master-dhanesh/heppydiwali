import { useState } from "react";

const App = () => {
    const [todos, settodos] = useState([
        { id: 1, title: "Kamm krle bhai", isCompleted: false },
    ]);

    const [title, settitle] = useState("");
    const [completed, setcompleted] = useState(false);
    const [gender, setgender] = useState("female");
    const [city, setcity] = useState("delhi");

    return (
        <div>
            <h1>Create Tasks</h1>
            <form>
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="title"
                />
                <br />
                <br />
                <input
                    checked={completed}
                    onChange={(e) => setcompleted(e.target.checked)}
                    type="checkbox"
                />
                Completed
                <br /> <br />
                <input
                    value="male"
                    onChange={(e) => setgender(e.target.value)}
                    checked={gender == "male" && true}
                    type="radio"
                />
                male
                <input
                    value="female"
                    onChange={(e) => setgender(e.target.value)}
                    checked={gender == "female" && true}
                    type="radio"
                />
                Female
                <br />
                <br />
                <select value={city} onChange={(e) => setcity(e.target.value)}>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="kolkata">Kolkata</option>
                </select>
                <br />
                <br />
                <button>Create Todo</button>
            </form>
        </div>
    );
};

export default App;
