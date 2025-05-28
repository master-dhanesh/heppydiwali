import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {
    const getproduct = async () => {
        try {
            // const strdata = await fetch("https://fakestoreapi.com/products");
            // const jsondata = await strdata.json();
            // console.log(jsondata);

            const response = await axios.get("/products");
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getproduct();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <button onClick={getproduct}>Get Products</button>
        </div>
    );
};

export default Home;
// we have to add fav functionality at last
