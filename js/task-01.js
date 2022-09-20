const liEl = document.querySelectorAll(".item");
console.log("Number of categories:", liEl.length);

liEl.forEach(function(categories){
console.log("Category:", categories.firstElementChild.textContent);
console.log("Elements:", categories.lastElementChild.children.length);
})