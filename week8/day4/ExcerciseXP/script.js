//ex1

// const xhr = new XMLHttpRequest()
// const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     console.log(JSON.parse(xhr.responseText))
//   }
// }

// xhr.open("GET", url)
// xhr.send()

//ex2
const xhr = new XMLHttpRequest()
const url = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2"

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(JSON.parse(xhr.responseText))
  }
}

xhr.open("GET", url)
xhr.send()