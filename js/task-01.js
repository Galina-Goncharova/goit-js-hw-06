const listWithId = document.querySelector('#categories'); 
const childrenListItem = listWithId.children;

console.log(`Number of categories: ${childrenListItem.length}`)

for (const category of childrenListItem) {
   
    const categoryName = category.firstElementChild.textContent;
    console.log(`Category: ${categoryName}`)
     
    
    const categoryElements = category.children[1].children;
    console.log(`Elements: ${categoryElements.length}`)
}