const form = document.querySelector('#my-form');
const userName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const userList = document.querySelector('#users');

form.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
   
        //added user data to li
        var li = document.createElement("li");
        li.className = "userList";
        var userInput = document.createTextNode(`Name-${userName.value}, Email-${email.value}, Phone no.-${number.value}`);
        li.appendChild(userInput);
        //add delete button to li
        var deleteBtn = document.createElement('button');
        deleteBtn.className = "deleteUser";
        deleteBtn.onclick="deleteUser(this)"
        deleteBtn.appendChild(document.createTextNode('Delete'));
        li.appendChild(deleteBtn);
        //add edit button
        var editBtn = document.createElement('button');
        editBtn.className = "editUser";
        editBtn.onclick="editUser(this)"
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editBtn);
        //append li to ul
        userList.appendChild(li);

        //assign the email as the key for the user so that each user gets added to the local storage because each mail is unique
const Name=userName.value;
const Email=email.value;
const PhNumber=number.value;
const input={
    Name,
    Email,
    PhNumber
}
        // let input1 = (`Name:${userName.value} Email-id:${email.value} Number:${number.value}`);
        localStorage.setItem(input.Email, JSON.stringify(input));
        // let finalInput = JSON.parse(localStorage.getItem(email.value));
        console.log(input);
        
        //to delete user
        var parentEle=document.getElementById('users');
        deleteBtn.onclick= () =>{
            localStorage.removeItem(input.Email);
            parentEle.removeChild(li);
        }

        //to edit user
        var parentEle=document.getElementById('users');
        editBtn.onclick= () =>{
            userName.value=input.Name;
            email.value=input.Email;
            number.value=input.PhNumber;
            localStorage.removeItem(input.Email);
            parentEle.removeChild(li);

        }

        userName.value = "";
        email.value = "";
        number.value="";
    }