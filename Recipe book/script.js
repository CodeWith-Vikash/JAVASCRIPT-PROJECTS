const parent=document.querySelector(".recipies")
const apiKey="5cf5306a91064af7874381db23bc58d7"
let recipe
let recipeNumber=0


async function getRecipies(){
    const url=`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
    const response= await fetch(url)
    const data= await response.json()
    recipe=data.recipes
    console.log(recipe);


    for (let index = 0; index <10; index++) {
            const itemData=recipe[recipeNumber]
            const container=document.createElement("div")
            container.className="recipie"
            const imageEl=document.createElement("img")
            imageEl.src=itemData.image
            const nameEl=document.createElement("h3")
            nameEl.textContent=itemData.title
            const paragraph=document.createElement("div")
            paragraph.className="ingredients"
            // const p=document.createElement("p")
            paragraph.innerHTML=`
            <strong>Ingredients:</strong> ${itemData.extendedIngredients
                .map((ingredient) => ingredient.original)
                .join(", ")}
            `
            
            // paragraph.appendChild(p)
            const btn=document.createElement("button")
            btn.textContent="View Recipe"

            container.appendChild(imageEl)
            container.appendChild(nameEl)
            container.appendChild(paragraph)
            container.appendChild(btn)
            
            parent.appendChild(container)
            recipeNumber++
        }
}
getRecipies()
