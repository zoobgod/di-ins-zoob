//ex1
async function fetchStarWars() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/")
      const objectStarWars = await response.json()
      console.log(objectStarWars.result)
    } catch (error) {
      console.error(error)
    }
  }
  fetchStarWars()
  //ex2
  //When the code is executed it will log CALLING in the console then after 2 seconds it will log RESOLVED