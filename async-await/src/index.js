import axios from 'axios';

//Services
const service = {
  getPeople: () => axios({url: 'http://localhost:3000/people'}),
  getPlaces: () => axios({url: 'http://localhost:3000/places'}),
};

async function ex3() {
  const {getPeople, getPlaces} = service;
  try {
    const people = await getPeople();
    const places = await getPlaces();

    console.log('Example #3', {
      people: people.data,
      places: places.data,
    });
  } catch (err) {
    console.log(err);
  }
}

async function ex3B() {
  const {getPeople, getPlaces} = service;
  try {
    const values = await Promise.all([getPeople(), getPlaces()]);
    console.log('Example #3B', values.map(v => v.data));
  } catch (err) {
    console.log(err);
  }
}

ex3B();

/*
function ex2() {
  let obj = {};

  service
    .getPeople()
    .then(response => {
      obj.people = response.data;
      return service.getPlaces();
    })
    .then(response => {
      obj.places = response.data;
      console.log('Example #2', obj);
    })
    .catch(err => {
      console.log(err);
    });
}

function ex2B() {
  const {getPeople, getPlaces} = service;
  Promise.all([getPeople(), getPlaces()])
    .then(values => {
      console.log('Example #2B', values.map(v => v.data));
    })
    .catch(err => {
      console.error(err);
    });
} */
