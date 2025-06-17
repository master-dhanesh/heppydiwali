import { memo } from "react";

const Recipe = ({ ing }) => {
    console.log("Hello From Recipe Component");
    return <div className="text-5xl">Recipe</div>;
};

export default memo(Recipe);
