import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
    return (
        <div className="text-white flex w-screen h-screen bg-gray-800 p-10">
            <Create />
            <Read />
        </div>
    );
};

export default App;
