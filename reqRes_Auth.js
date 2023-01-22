let token = '';

let email = document.querySelectorAll('input')[0]
let password = document.querySelectorAll('input')[1]
let button = document.querySelectorAll('input')[2]
console.log(password)
button.addEventListener('click',(e)=>{
        
        axios.post('https://reqres.in/api/login',{
        "email": `${email.value}`,
        "password": `${password.value}`      
})
.then((response)=>{
        localStorage.setItem('token',response.data.token)
        token = response.data.token
        if(response.status === 200){
               window.location.href = 'http://127.0.0.1:5501/login.html'
        }
}).catch((rej)=>alert(rej.response.data.error))

e.preventDefault()
})

