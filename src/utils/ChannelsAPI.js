const api = "https://localhost:44370/api"

const token = ""
const headers = {
    'Accept': 'application/json',
    'Authorization': token
}


// login
export const loginUser = (post_body) => 
  fetch(`${api}/Account`, { 
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post_body) 
  })
    .then(res => res.json())
    .then(data => data)