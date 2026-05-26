let head1 = document.getElementById("head")

setInterval(()=>{
    if(head1.innerHTML=="Hello Welcome"){
        head1.textContent = "Hello DOM"
    }else{
        head1.textContent ="Hello Welcome"
    }
},5000)

head1.style.backgroundColor="black"
head1.style.color="white"


let btn = document.getElementById("login")
let username = document.getElementById("userName")
let password = document.getElementById("password")
// btn.addEventListener("click",async(e)=>{
//     e.preventDefault()
//     btn.value = "logout"
//     try{
//         const res = await fetch("https://fakestoreapi.com/users",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             username:username.value,
//             password:password.value
//             })
//         }
//     )
//     const data = await res.json()
//     console.log(data);
//     }catch(err){
//         console.log(err);
        
//     }
    

    
// })

// let text = document.getElementById("userText")
// // const getValue = (e)=>{
// //     console.log(e.target.value);
    
// // }

// text.addEventListener("change",()=>{
//     console.log(text.value);
    
// })

const submitData = (e)=>{
    e.preventDefault()
    console.log(username.value);
    console.log(password.value);
    
}