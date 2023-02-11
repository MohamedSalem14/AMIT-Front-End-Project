let allDataError = document.getElementById("allData");
let loginBtn = document.getElementById("loginBtn");
let userNameAlert = document.getElementById("userInvalid");
let emailAlert = document.getElementById("emailInvalid");
let passAlert = document.getElementById("passInvalid");
let secBox = document.querySelector(".box");
let closeBox = document.querySelector(".close-box");
let modalBox = document.getElementById("m3lshBox");
let users ;

if(localStorage.getItem("allUsers") == null ){
    users = [];
    }else{
    users = JSON.parse(localStorage.getItem("allUsers"));
}

function login (){
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    if(userName !== "" && userEmail !== "" && userPassword !== ""){
                var user = {
                userName : userName ,
                userEmail : userEmail ,      
                userPassword : userPassword
                };
                

                localStorage.setItem("allUsers" , JSON.stringify(users));
                location.href = "index.html";
                localStorage.setItem("userName" , userName);                

            } else if (userName === "" && userEmail === "" && userPassword === ""){
                allDataError.classList.remove("d-none");
            } else if (userName === "" && userEmail !== "" && userPassword !== ""){
                userNameAlert.classList.remove("d-none");
            } else if (userName !== "" && userEmail === "" && userPassword !== ""){
                emailAlert.classList.remove("d-none")
            } else if (userName !== "" && userEmail !== "" && userPassword === ""){
                passAlert.classList.remove("d-none");
            } else if (userName !== "" && userEmail === "" && userPassword === ""){
                emailAlert.classList.remove("d-none");
                passAlert.classList.remove("d-none");
            } else if (userName === "" && userEmail !== "" && userPassword === ""){
                userNameAlert.classList.remove("d-none");
                passAlert.classList.remove("d-none");
            } else if (userName === "" && userEmail === "" && userPassword !== ""){
                userNameAlert.classList.remove("d-none");
                emailAlert.classList.remove("d-none");
}
users.push(user);
}

loginBtn.addEventListener("click", login);

function closeByEscape(e){
    if(e.key === "Escape" && !secBox.classList.contains("hidden")){
        secBox.classList.add("hidden");
    }
}

function showBox(){
    secBox.classList.remove("hidden");
}

function closeBoxBtn(){
    secBox.classList.add("hidden");
}

function closeBoxBtn(){
    secBox.classList.add("hidden");
}

closeBox.addEventListener("click", closeBoxBtn);
document.addEventListener("keydown" ,closeByEscape);
modalBox.addEventListener("click", showBox);