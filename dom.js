//EXMINE THE DOCUMENT OBJECT
//console.dir(document);
/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title="123"
console.log(document.doctype)
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);*/


/*var headerTitle=document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(headerTitle);
headerTitle.textContent ="HELLO";
headerTitle.innerText ="computer courses";
headerTitle.innerHTML='<h1>computer courses</h1>';*/
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[3]);
var additems = document.getElementsByClassName("title");
console.log(additems);
additems[0].textContent = 'hello items';
