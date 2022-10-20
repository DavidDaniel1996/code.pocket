var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
    .then(response => response.body)
    .catch(error => console.log('error', error));