const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
  ];

  //create a div with each of the robots containing all of infromation about the robots and its picture
  //create a div for each robot
  let main = document.createElement('main');
  main.classList.add('main');
  //create a div for each robot
  function createRobot(){
    main.innerHTML = '';
    for(let i = 0; i < robots.length; i++){
      let div = document.createElement('div');
      div.classList.add('inner-div');
      let img = document.createElement('img');
      img.setAttribute('src', `https://robohash.org/${robots[i].id}`)
      img.style.width = '120px';
      div.appendChild(img);
      let name = document.createElement('h2');
      name.innerText = robots[i].name;
      div.appendChild(name)
      let email = document.createElement('p');
      email.textContent = robots[i].email;
      div.appendChild(email)
      main.appendChild(div)
    }
  }
  createRobot();
  document.body.appendChild(main);
  //create a search bar
  let searchBar = document.createElement('input');
  searchBar.setAttribute('type', 'text');
  searchBar.setAttribute('placeholder', 'Search for a robot');
  searchBar.classList.add('search-bar');
  document.body.appendChild(searchBar);
  //add an event listener to the search bar
  searchBar.addEventListener('keyup', function(){
    let search = searchBar.value.toLowerCase();
    let filteredRobots = robots.filter(function(robot){
      return robot.name.toLowerCase().includes(search);
    })
    robots = filteredRobots;
    createRobot();
  }
  )
  //create a button that will sort the robots by name
  let sortButton = document.createElement('button');
  sortButton.textContent = 'Sort by name';
  sortButton.classList.add('sort-button');
  document.body.appendChild(sortButton);
  //add an event listener to the button
  sortButton.addEventListener('click', function(){
    robots.sort(function(a, b){
      if(a.name < b.name){
        return -1;
      }
      if(a.name > b.name){
        return 1;
      }
      return 0;
    })
    createRobot();
  }
  )
  //create a button that will sort the robots by id
  let sortButton2 = document.createElement('button');
  sortButton2.textContent = 'Sort by id';
  sortButton2.classList.add('sort-button');
  document.body.appendChild(sortButton2);
  //add an event listener to the button
  sortButton2.addEventListener('click', function(){
    robots.sort(function(a, b){
      if(a.id < b.id){
        return -1;
      }
      if(a.id > b.id){
        return 1;
      }
      return 0;
    })
    createRobot();
  }
  )
  