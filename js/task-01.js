const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryName = category.firstElementChild.textContent;
    console.log(`Category: ${categoryName}`);

    const categoryItem = category.lastElementChild.children;
    console.log(`Elements: ${categoryItem.length}`);
});

