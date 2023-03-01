const form = document.querySelector("form")
const usernameError = document.querySelector(".username-error")
const passwordError = document.querySelector(".password-error")

form.addEventListener("submit",async function(e){
    e.preventDefault();
    console.log("Hello")
    const formData = new FormData(form);
    const userData = {};
    const fetchLocation = document.title.toLocaleLowerCase();
    for([key, value] of formData){
        userData[key] = value;
    }
    try{
        const req = await fetch(`http://localhost:3000/${fetchLocation}`,{
            method: "POST",
            headers: {
                "Content-type" : "application/json",
            },
            body: JSON.stringify(userData)
        });
        const res = await req.json();
        console.log(res)
        if(res.url){
            location.assign(`http://localhost:3000/${res.url}`) 
        }
        if(res.user){
            console.log(res.user)
        }
        if(res.errors){
            console.log(res.errors)
            usernameError.textContent = res.errors.username
            passwordError.textContent = res.errors.password
        }
    }
    catch(err){
        console.log(err)
    }



    
})

