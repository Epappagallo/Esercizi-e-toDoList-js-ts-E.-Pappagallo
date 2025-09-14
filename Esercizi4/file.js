const promise1 = new Promise(executionFunction);
function executionFunction() {
    setTimeout(resolveFunction, 2000);
};
function resolveFunction() {
    console.log("Operazione completata")
};

let number = 21;
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (number % 2 === 0) {
            resolve(number);
        } else {
            reject(new Error("E' dispari"));
        }
    }, 3000);
});
function checkNumber() {
    return promise2
        .then((value) => console.log(value + " e' pari"))
        .catch((error) => console.error(error));
};
checkNumber();

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomNumber = Math.random() * 10
        resolve(randomNumber);
    }, 3000);
});
const promise31 = promise3.then((value) => { console.log(value); return value; });
const promise32 = promise3.then((value) => { const squared = value * value; console.log(squared); return squared; });
const promise33 = promise3.then((value) => { console.log(value); return value; });
Promise.all([promise31, promise32, promise33])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => console.error(error));

async function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        const firstFive = Array.isArray(result) ? result.slice(0, 5) : [];
        console.log(firstFive);
    } catch (error) {
        console.error(error.message);
    }
}
getData();

async function fetchUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    try {
        const response = await fetch(url, {
            status: 200,
        });
        
        if (!response.ok) {
            throw new Error(`Utente non trovato`);
        }
        const result = await response.json();
        console.log(result.name);
        console.log(result);
        return result;
    } catch (error) {
        console.error(error.message);
    }
}
fetchUser(2);

async function createPost(title, body) {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ title, body, userId: 1 }),
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}
createPost();

async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        if (!response.ok) {
            throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }
        const todos = await response.json();
        const todoList = document.getElementById('todo-list');
        todos.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.title;
            todoList.appendChild(listItem);
        });

    } catch (error) {
        console.error("Si è verificato un problema:", error);
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '<li>Impossibile caricare le attività.</li>';
    }
}
fetchTodos();



const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
const commentsPromise = fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());
Promise.race([postsPromise, commentsPromise])
  .then(firstResponse => {
    if (firstResponse && firstResponse[0] && firstResponse[0].title) {
      console.log('posts');
    } else {
      console.log('commets');
    }
    console.log(firstResponse);
  })
  .catch(error => {
    console.error('Una delle richieste è fallita:', error);
  });



  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Utente non trovato');
    }
    return response.json();
  })
  .then(user => {
    console.log(`Nome utente: ${user.name}`);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Post non trovati');
    }
    return response.json();
  })
  .then(posts => {
    posts.forEach(post => {
      console.log(post.title);
    });
  })
  .catch(error => {
    console.error('Si è verificato un errore:', error);
  });