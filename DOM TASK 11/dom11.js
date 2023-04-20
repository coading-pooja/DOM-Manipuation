const form = document.querySelector('#my-form');
const userName = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
form.addEventListener('submit', onsubmit);
function onsubmit(e) {
    e.preventDefault();
    if (userName.value === "" || email.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Pleaser enter all fields";
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        var li = document.createElement("li");
        var input = document.createTextNode(`${userName.value} : ${email.value}`);
        li.appendChild(input);
        userList.appendChild(li);

        localStorage.setItem("name", userName.value);
        console.log(localStorage.getItem("name"));
        localStorage.setItem("email", email.value);
        console.log(localStorage.getItem("email"));
        // localStorage.setItem("name", userName.value);
        // console.log(localStorage.getItem("name"));
        // localStorage.setItem("email", email.value);
        // console.log(localStorage.getItem("email"));

        let input1= (`${userName.value}: ${email.value}`);
        let inputStr=JSON.stringify(input1);
        localStorage.setItem("user", inputStr);
        let finalInput=JSON.parse(localStorage.getItem("user"));
        console.log(finalInput);

        userName.value = "";
        email.value = "";
    }
}