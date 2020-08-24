var baseurl="https://jsonplaceholder.typicode.com";
var posts
fetch(baseurl+ "/posts/2", {
    method: 'GET'})
    .then(
        function(response){
        return response.json();
        })
        .then(
            function(jsonResp) {
            console.log(jsonResp);
            posts=jsonResp
            }
            );
            function displayPost(post){
                var postList=document.getElementById("postLists");

                var item=document.createElement("li");
                item.innerHTML=post;
            });