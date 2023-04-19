let itemList = document.querySelector("#items");
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "gray"
console.log(itemList.parentElement.parentElement);
//lastElementChild
 console.log(itemList.firstChild)
 //firstElementChild
 console.log(itemList.firstElementChild);
 // lastChild
 console.log(itemList.lastChild);
  // lastElementChild
  console.log(itemList.lastElementChild);
  itemList.lastElementChild.textContent = "hello4";
  //nextSibiling
  console.log(itemList.nextSibling);
  //nextElementSibiling
  console.log(itemList.nextElementSibling);   
  //previousSibiling
  console.log(itemList.previousSibling);
  //previousElementSibiling
  console.log(itemList.previousElementSibling);
  itemList.previousElementSibling.style.color="green";
  //creatElement
  //creat a div
  var newDiv = document.createElement('div');
  //add class
  newDiv.className='hello';
  //add id
  newDiv.id ='hello';
  //add attr
  newDiv.setAttribute('title','hello Div');
  console.log(newDiv);
  //creat text node
  var newDivText = document.createTextNode('hello world');
  //add text to div
  newDiv.appendChild(newDivText);
  console.log(newDiv);
  





