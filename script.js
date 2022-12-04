const form = document.getElementById("form");
const input = document.getElementById("input");
const error = document.getElementById("error");
const success = document.querySelector(".success");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  //   let field = input.value;

  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(input.value.toLowerCase())) {
    error.innerText = "Oops! Please check your email";
  } else {
    error.style.color = "#38fc6c";
    input.style.borderColor = "#38fc6c";
    error.innerHTML = "We recieved your email!";
  }

  if (input.value === "") {
    error.innerText = "Oops! Please add your email";
    input.style.borderColor = "red";
    error.style.color = "red";
  }
});
