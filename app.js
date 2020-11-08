//async await

async function getData() {
    const response = await axios.get('https://swapi.dev/api/planets/');
    const { next, results } = response.data //destructure to assing variable to objects
    for (let planet of results) {
        console.log(planet.name);
    }
    const responseTwo = await axios.get(next);
    const resultsTwo = responseTwo.data.results;
    for (let planet of resultsTwo) {
        console.log(planet.name);
    }
}

//response is the promise object
//then data is an object inside that object
// then we iterate over the results of that data
//then we can get the name property for the planet

async function getSpaceData() {
    const spaceResponse = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
    // console.log(spaceResponse.data);
    const ul = document.querySelector('#launches');
    for (let launch of spaceResponse.data) {
        const newLI = document.createElement('LI');
        const mission = document.createElement('B');
        mission.innerText = launch.mission_name;
        newLI.append(mission);
        newLI.innerHTML += ` - ${launch.rocket.rocket_name}`
        ul.append(newLI);
        // console.log(launch.mission_name);
        // console.log(launch.flight_number);
        // console.log(launch.rocket.rocket_name);
    }
};

const btn = document.querySelector('#getLaunches');
btn.addEventListener('click', getSpaceData);

// the above example will show the launch mission name and the rocket being used

async function getJoke(first, last) {
    let res = await axios.get(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`);
    console.log(res.data.value.joke)
};


async function getUsers() {
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res)
}

async function createUser() {
    const res = await axios.post('https://reqres.in/api/users', {username :
'testUser', email: 'testEmail@testmail.com', age: 1});
    console.log(res);
}

createUser();


