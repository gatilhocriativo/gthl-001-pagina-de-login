function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email.trim() === "" || password.trim() === "") {
    alert("os campos são obrigatórios");
    return;
  }

  const result = {
    email: email.trim(),
    password: password.trim(),
  };

  console.log(result);

  window.location.href = "../dashboard.html";

  return result;
}
