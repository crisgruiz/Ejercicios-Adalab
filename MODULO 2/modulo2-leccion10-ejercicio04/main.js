"use strict";
const orgname = document.querySelector(".user");
const repos = document.querySelector(".repos");
const search = document.querySelector(".search");
function handleSearch() {
  const orgnameValue = orgname.value;
  fetch(`https://api.github.com/orgs/${orgnameValue}/repos`)
    .then((response) => response.json())
    .then((data) => {
      for (const repoData of data) {
        repos.innerHTML += `<li>${repoData.name}</li>`;
      }
    });
  fetch(`https://api.github.com/users/${orgnameValue}/repos`)
    .then((response) => response.json())
    .then((data) => {
      for (const repoData of data) {
        repos.innerHTML += `<li>${repoData.name}</li>`;
      }
    });
}
search.addEventListener("click", handleSearch);
