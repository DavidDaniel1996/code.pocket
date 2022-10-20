var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/users',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});