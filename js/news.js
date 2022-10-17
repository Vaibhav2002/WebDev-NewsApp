import { addCategories } from "./categories.js";

const categoryContainer = document.getElementById("categoriesList")

addCategories(categoryContainer, (category)=> {
    console.log(category)
});

