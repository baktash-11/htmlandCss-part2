// adding element in the page
const body =document.body;
// body.append("Hello World")

// const div = document.createElement('div');
// using innerText
// div.innerText="By Baktash Sana"
// usingTextContent
// div.textContent="Baktash Sana"
// using innerHTML
// div.innerHTML="<h2>Baktash Sana</h2>"
// body.append(div);
const div = document.querySelector('div')
const spanHi = document.querySelector("#hi")
const spanBy = document.querySelector('#bye')

// removing element;
spanBy.remove();
div.removeChild(spanHi);

div.append(spanHi);
div.append(spanBy);

// getting element getAttribute
console.log(spanBy.getAttribute('id'))
console.log(spanHi.id)

spanHi.setAttribute('title', 'Hello');
console.log(spanHi.title)

spanHi.removeAttribute("title");
console.log(spanHi.title)
