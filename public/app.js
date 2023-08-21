document.getElementById('btn').addEventListener('click', async () => {
    const response = await fetch('/user');
    const data = await response.json();
    alert(data.message);
  });