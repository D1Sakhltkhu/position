let form = document.getElementById("login");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username.length < 4) {
    p.style.color = "red";
    p.innerHTML = "username-ის სიგრძე უნდა იყოს მინიმუმ 4";
    return;
  }

  if (password.length < 6) {
    p.style.color = "red";
    p.innerHTML = "password-ის სიგრძე უნდა იყოს მინიმუმ 6";
    return;
  }

  p.style.color = "green";
  p.innerHTML = "წარმატებით შეხვედით";
});
