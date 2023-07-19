fetch('/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const userElement = document.createElement('p');
    userElement.textContent = JSON.stringify(data);
    document.body.appendChild(userElement);
  })
  .catch(error => console.error(error));