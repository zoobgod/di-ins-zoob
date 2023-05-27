//daily challenge 1
function resolveAll(promises) {
    return Promise.all(promises)
      .then(results => {
        return results
      })
      .catch(error => {
        console.error(error)
        return []
      })
  }
  
// Example usage
  const promise1 = Promise.resolve(3)
  const promise2 = 42
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo')
  })
  
  resolveAll([promise1, promise2, promise3])
    .then(results => {
      console.log(results)
    }) //Basically, Promise.all takes an array of promises and returns a promise that resolves to an array of the resolved values of those promises

//daily challenge 2
const form = document.querySelector('form')
      const sunriseTimesDiv = document.querySelector('#sunrise-times')

      form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const city1Lat = document.querySelector('#city1-lat').value
        const city1Lon = document.querySelector('#city1-lon').value
        const city2Lat = document.querySelector('#city2-lat').value
        const city2Lon = document.querySelector('#city2-lon').value 
        //used querySelector to get the values of the input fields instead of getElementById, because it is easier to use querySelector
        
        const sunrise1Promise = 
        fetch(`https://api.sunrise-sunset.org/json?lat=${city1Lat}&lng=${city1Lon}&date=today`)
          .then(response => response.json())
          .then(data => data.results.sunrise)

        const sunrise2Promise = 
        fetch(`https://api.sunrise-sunset.org/json?lat=${city2Lat}&lng=${city2Lon}&date=today`)
          .then(response => response.json())
          .then(data => data.results.sunrise)

        try {
          const [sunrise1, sunrise2] = await Promise.all([sunrise1Promise, sunrise2Promise])
          sunriseTimesDiv.textContent = `City 1 Sunrise: ${sunrise1}, City 2 Sunrise: ${sunrise2}`
        } catch (error) {
          console.error(error)
          sunriseTimesDiv.textContent = 'Error retrieving sunrise times'
        }
      })