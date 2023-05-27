const form = document.getElementById("myForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements["name"].value;
    const lastname = form.elements["lastname"].value;

    const data = { name, lastname };
    const json = JSON.stringify(data);

    output.textContent = json;
  });