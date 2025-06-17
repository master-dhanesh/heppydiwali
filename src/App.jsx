import { useMemo, useState } from "react";

const App = () => {
    const [add, setadd] = useState(0);
    const [sub, setsub] = useState(99);

    const product = useMemo(() => {
        console.log("product function called!");
        return add * 2;
    }, [add]);

    return (
        <div className="py-10 px-[10%] text-white bg-gray-800 h-screen w-screen font-thin">
            <h1 className="mt-10 mb-5 text-6xl">{product}</h1>
            <div>
                <button
                    onClick={() => setadd(add + 1)}
                    className="font-black p-2 text-5xl rounded bg-blue-400"
                >
                    +
                </button>
                <span className="text-5xl ml-5 font-black">{add}</span>
                <br />
                <br />
                <button
                    onClick={() => setsub(sub - 1)}
                    className="font-black p-2 text-5xl rounded bg-red-400 "
                >
                    -
                </button>
                <span className="text-5xl ml-5 font-black">{sub}</span>
            </div>
        </div>
    );
};

export default App;
