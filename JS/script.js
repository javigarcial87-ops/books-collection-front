const btnUsers = document.getElementById('btnUsers')
const btnBooks = document.getElementById('btnBooks')
const content = document.getElementById('content')

const API_URL = 'http://localhost:3000'

//USERS

btnUsers.addEventListener('click', async ()=>{
    content.innerHTML = '<p>Cargando usuarios...</p>'

    const response = await fetch (`${API_URL}/users`)
    const users = await response.json()

    content.innerHTML = users.map(user => `
        
        
        
        
        
        
        
        
        `).join('')


})





























