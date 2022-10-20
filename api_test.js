var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
    .then(response => response.body)
    .then(result => console.log(result[0]))
    .catch(error => console.log('error', error));