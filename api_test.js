var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result.data))
    .catch(error => console.log('error', error));