const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deletebtn = document.querySelector('.delete');

const renderDetails = async () => {
     const res = await fetch('http://localhost:3000/posts/' + id);
     const post = await res.json();

     const template = `
          <h1>${post.title}</h1>
          <p>${post.body}</p>
     `
     container.innerHTML = template;
}

deletebtn.addEventListener('click', async (e) => {
     const res = await fetch('http://localhost:3000/posts/' + id, {
          method: 'DELETE'
     });

     window.location.replace('/index.html');
     
})

window.addEventListener('DOMContentLoaded', () => renderDetails());