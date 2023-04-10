/*document
  .getElementById("register-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //console.log("submitted", { username, email, password });
    const { data } = axios.post("/register", { username, email, password });
    console.log("data", data);
  });*/

  document
  .getElementById("register-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const {data} = axios.post("/register", { username, email, password, password});
    console.log('data', data);
  });