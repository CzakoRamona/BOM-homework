var baseurl="https://jsonplaceholder.typicode.com";

fetch(baseurl+ "/posts/2", {
    method: 'GET'})
    .then(
        function(response){
        return response.json();
        })
        .then(
            function(jsonResp) {
            console.log(jsonResp);
            }
            );