// Use JavaScript to obtain a reference to the 
//   first section with the class of article_header and change its text with 
    // the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to 
//   obtain a reference to all article__header elements 
//   and change their classList property value to article__header important.
// Obtain a reference the element 
//   with a class of dashed and remove it.
// Obtain a reference the element with   
//   a class of article_footer and add the class of goldenrod it.


// 1.
const firstSection = document.querySelector(".article__header");
firstSection.textContent = "Welcome to the Nolan blog";

// 2.
const allArticles = document.querySelectorAll(".article__header")
for(let i = 0; i < allArticles.length; i++) {
  allArticles[i].classList.add("important");
  console.log(allArticles[i].classList);
}

const dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");
console.log(dashed.classList);

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");
console.log(footer.classList);

