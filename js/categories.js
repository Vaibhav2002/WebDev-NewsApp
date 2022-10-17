const categories = ["Treding", "Sports", "Politics", "Technology"]

var container = ""

const getCategoryHtml = (category) => 
    `<button id = "${category}" class="btn btn-secondary mx-1 category-card py-2 px-4 text-light" data-bs-toggle="button">
        ${category}
    </button> `


export const addCategories = (cont, onPress) => {
    container = cont
    let parser = new DOMParser()
    categories.map((category) => {
        category = parser.parseFromString(getCategoryHtml(category), 'text/html').getElementById(category)
        container.appendChild(category)
        category.addEventListener('click', ()=>onCategoryPressed(category, onPress))
    })
}

const onCategoryPressed = (categoryCard, onPress) => {
    let categories = container.childNodes

    for(let i = 1; i < categories.length;i++) {
        let node = categories[i]
        let isPressedCategory = categoryCard.innerText === node.innerText

        if(isPressedCategory) node.classList.add("active")
        else node.classList.remove("active")

        node.ariaPressed = isPressedCategory
    }
    
    onPress(categoryCard.innerText)
}
