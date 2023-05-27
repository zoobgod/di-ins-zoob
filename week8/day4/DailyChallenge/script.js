const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const gifContainer = document.getElementById("gifContainer")
const deleteAllBtn = document.getElementById("deleteAllBtn")
searchBtn.addEventListener("click", function(event) {
  event.preventDefault()
  const searchQuery = searchInput.value
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchQuery}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const gifUrl = data.data.images.original.url
      const gifCategory = searchQuery
      const gifElement = createGifElement(gifUrl, gifCategory)
      gifContainer.appendChild(gifElement)
    })
    .catch(error => console.error(error))
}) // Promises were learned in week9, but I wanted to use them here already.

function createGifElement(gifUrl, gifCategory) {
  const gifElement = document.createElement("div")
  const imgElement = document.createElement("img")
  const categoryElement = document.createElement("p")
  const deleteBtn = document.createElement("button")

  imgElement.src = gifUrl
  categoryElement.textContent = `Category: ${gifCategory}`
  deleteBtn.textContent = "Delete"
  deleteBtn.addEventListener("click", function() {
    gifElement.remove()
  })

  gifElement.appendChild(imgElement)
  gifElement.appendChild(categoryElement)
  gifElement.appendChild(deleteBtn)

  return gifElement
}

deleteAllBtn.addEventListener("click", function() {
  gifContainer.innerHTML = ""
})