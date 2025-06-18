import { useRef } from "react";
import styled from "styled-components";

const App = () => {
    const inputRef = useRef();

    // const MyH1 = styled.h1`
    //     color: white;
    //     font-size: 100px;
    //     background-color: ${(props) => props.bg};
    // `;

    const c = "red";
    const MYH1 = styled.h1({
        color: "pink",
        fontSize: "100px",
        backgroundColor: c,
    });

    const WatchHandler = () => {
        if (inputRef.current.value.length < 4) {
            inputRef.current.style.borderBottom = "2px solid tomato";
        } else {
            inputRef.current.style.borderBottom = "2px solid green";
        }
    };

    return (
        <div className="py-10 px-[10%] text-white bg-gray-800 h-screen w-screen font-thin">
            <MYH1 bg="pink">Let's Learn useRef</MYH1>

            <input
                ref={inputRef}
                type="text"
                placeholder="enter something..."
                className="my-10 block border-b p-2 text-5xl outline-0"
            />
            <button onClick={WatchHandler} className="text-5xl">
                See Value
            </button>
        </div>
    );
};

export default App;
