import { useCallback, useMemo, useState } from "react";
import Recipe from "./Recipe";

const App = () => {
    const [add, setadd] = useState(0);
    const [sub, setsub] = useState(99);

    const ingredients = useCallback(() => {
        console.log("Recipe Ingredients Here");
    }, [sub]);

    return (
        <div className="py-10 px-[10%] text-white bg-gray-800 h-screen w-screen font-thin">
            <button
                onClick={() => setadd(add + 1)}
                className="mr-10 mt-[10%] font-black p-2 text-5xl rounded bg-blue-400"
            >
                {add}
            </button>
            <button
                onClick={() => setsub(sub - 1)}
                className=" mt-[10%] font-black p-2 text-5xl rounded bg-blue-400"
            >
                {sub}
            </button>
            <br />
            <br />
            <Recipe ing={ingredients} />
        </div>
    );
};

export default App;
