import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
    const { data, setdata } = useContext(recipecontext);
    const navigate = useNavigate();
    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id);
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: recipe.title,
            chef: recipe.chef,
            image: recipe.image,
            inst: recipe.inst,
            desc: recipe.desc,
            ingr: recipe.ingr,
        },
    });

    const SubmitHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id);
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...recipe };
        setdata(copydata);
        toast.success("Recipe updated!");
    };

    const DeleteHandler = () => {
        const filterdata = data.filter((r) => r.id != params.id);
        setdata(filterdata);
        toast.success("recipe deleted!");
        navigate("/recipes");
    };

    return recipe ? (
        <div className="w-full flex">
            <div className="left w-1/2 p-2">
                <h1 className="text-5xl font-black">{recipe.title}</h1>
                <img className="h-[20vh]" src={recipe.image} alt="" />
                <h1>{recipe.chef}</h1>
                <p>{recipe.desc}</p>
            </div>

            <form className="w-1/2 p-2" onSubmit={handleSubmit(SubmitHandler)}>
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
                    value={recipe.desc}
                    className="block border-b outline-0 p-2"
                    {...register("desc")}
                    placeholder="//start from here"
                ></textarea>

                <textarea
                    className="block border-b outline-0 p-2"
                    {...register("ingr")}
                    placeholder="//write ingredients seperated by comma"
                ></textarea>

                <textarea
                    className="block border-b outline-0 p-2"
                    {...register("inst")}
                    placeholder="//write instructions seperated by comma"
                ></textarea>

                <select
                    className="block border-b outline-0 p-2"
                    {...register("category")}
                >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button className="mt-5 block bg-blue-900 px-4 py-2 rounded">
                    Update Recipe
                </button>
                <button
                    onClick={DeleteHandler}
                    className="mt-5 block bg-red-900 px-4 py-2 rounded"
                >
                    Delete Recipe
                </button>
            </form>
        </div>
    ) : (
        "Loading..."
    );
};

export default SingleRecipe;
