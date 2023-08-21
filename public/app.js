document.getElementById('btn').addEventListener('click', async () => {
  let userName = document.getElementById("username").value
  let userEmail = document.getElementById("email").value

  const response = await fetch('/user', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "user": {
        "name": userName,
        "email": userEmail
      }
    })
  });

  const data = await response.json();
  alert(data.message);
});