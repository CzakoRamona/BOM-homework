
var baseUrl = "http://www.boredapi.com/api/activity/";

function getActivty() {
    fetch(baseUrl, {method: "GET"})
    .then(
        function(response){
            // parsing the response
            return response.json();
        }
    ).then(
        function(jsonResp) {
            console.log(jsonResp);
            displayActivity(jsonResp);
        }
    );
}

function displayActivity(currentActivity) {
    var activityContainer = document.getElementById("activity-container");
    activityContainer.innerText = currentActivity.activity;
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("activity-button").addEventListener("click", getActivty);
});


