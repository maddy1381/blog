
const container = document.querySelector('.blogs');

const renderPosts = async () => {
     let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';

     const res = await fetch(uri);
     const posts = await res.json();

     let template = '';
     posts.forEach(post => {
          template += `
          <div class="post">
               <h2>${post.title}</h2>
               <p><small>${post.likes} likes</small></p>
               <p>${post.body.slice(0, 200)}</p>
               <a href="/details.html?id=${post.id}">read more...</a>
          </div>
          `
     })

     container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => renderPosts());