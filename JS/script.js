const btnUsers = document.getElementById('btnUsers')
const btnBooks = document.getElementById('btnBooks')
const content = document.getElementById('content')

const API_URL = 'http://localhost:4000'

//USERS

btnUsers.addEventListener('click', async ()=>{
    content.innerHTML = '<p>Cargando usuarios...</p>'

    const response = await fetch (`${API_URL}/users`)
    const users = await response.json()

    content.innerHTML = users.map(user => `
        <div class="card">

        <h3>${user.nombre}</h3>
        <p>${user.email}</p>
        <p>Colección</p>
        
        <ul>
            
            ${user.libros.map(book => `<li>${book}</li>`).join('')}


        </ul>
        <p>Whislist</p>
        <ul>
            ${user.lista.map(book => `<li>${book}</li>`).join('')}
        </ul>
        
        </div>
        `).join('')
})


//LIBROS

btnBooks.addEventListener('click', async () => {
  content.innerHTML = '<p>Cargando libros...</p>'

  const response = await fetch(`${API_URL}/books`)
  const books = await response.json()

  content.innerHTML = books.map(book => `
    <div class="card">
      <img src="${book.imagen}" alt="${book.titulo}">
      <h3>${book.titulo}</h3>
      <p>${book.autor}</p>
      <p>${book.fechaPublicacion}</p>
    </div>
  `).join('')
})




























