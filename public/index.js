/* let's go! */
var xhr = new XMLHttpRequest();
var url = "https://api.github.com/users/jackbridger?access_token=f560887fc447450b15e3c0ec4253b9dd2818d8c7";
let gitName = document.getElementById('github-user-handle');
let repos = document.querySelector("#github-user-repos");
    
function gitCall() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('xhr status : ' + xhr.status );
        var response = JSON.parse(xhr.responseText);
        gitName.textContent = response.name;
        repos.textContent = response.public_repos;
    }

    
}
xhr.onreadystatechange = gitCall;
xhr.open('GET', url, true);
xhr.send();


