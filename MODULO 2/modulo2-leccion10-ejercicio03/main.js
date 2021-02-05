"use strict";

const user = document.querySelector(".user");
const login = document.querySelector(".login");
const photo = document.querySelector(".photo");
const repositories = document.querySelector(".repositories");
const search = document.querySelector(".search");
function handleSearch() {
  const username = user.value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      login.innerHTML = data.login;
      photo.src = data.avatar_url;
      photo.alt = username;
      repositories.innerHTML = data.public_repos;
    });
}
search.addEventListener("click", handleSearch);
