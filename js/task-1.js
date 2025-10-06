const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryHeader = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryHeader}`);
  console.log(`Elements: ${categoryElements}`);
});
