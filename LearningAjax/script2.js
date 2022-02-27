document.getElementById('button').addEventListener('click', loadUsers);

//load github users

function loadUsers() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);

  xhr.onload = function () {
    let output = '';

    if (this.status == 200) {
      let users = JSON.parse(this.responseText);
      for (i in users) {
        output += ` <div class = 'user'><h2> Username:<i> ${users[i].login}</h2> </i>
        <img src = "${users[i].avatar_url}" ><h3>
        <a href="${users[i].html_url}">Visit ${users[i].login}'s profile</a></h3>
        
        <br><br> </div>`;
      }
    }
    document.getElementById('users').innerHTML = output;
  };

  xhr.send();
}
