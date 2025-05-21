import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
    const { data, setdata } = useContext(recipecontext);
    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        setdata([...data, recipe]);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <input
                className="block border-b outline-0 p-2"
                {...register("image")}
                type="url"
                placeholder="Enter Image Url"
            />
            <small className="text-red-400">
                THis is how the error is shown
            </small>
            <input
                className="block border-b outline-0 p-2"
                {...register("title")}
                type="text"
                placeholder="Recipe Title"
            />
            <input
                className="block border-b outline-0 p-2"
                {...register("chef")}
                type="text"
                placeholder="Chef Name"
            />

            <textarea
                className="block border-b outline-0 p-2"
                {...register("description")}
                placeholder="//start from here"
            ></textarea>

            <textarea
                className="block border-b outline-0 p-2"
                {...register("ingredients")}
                placeholder="//write ingredients seperated by comma"
            ></textarea>

            <textarea
                className="block border-b outline-0 p-2"
                {...register("instructions")}
                placeholder="//write instructions seperated by comma"
            ></textarea>

            <select
                className="block border-b outline-0 p-2"
                {...register("category")}
            >
                <option value="cat-1">Category 1</option>
                <option value="cat-2">Category 2</option>
                <option value="cat-3">Category 3</option>
            </select>

            <button className="mt-5 block bg-gray-900 px-4 py-2 rounded">
                Save Recipe
            </button>
        </form>
    );
};

export default Create;
