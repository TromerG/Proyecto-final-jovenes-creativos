const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'inicioSesion.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Vuelve te extrañaremos!')
    localStorage.removeItem('login_success')
    window.location.href = 'inicioSesion.html'
})