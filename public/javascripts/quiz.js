// Currently just testing

// Define the API URL
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.sprites.front_default);
  })
  .catch(error => {
    console.error('Error:', error);
  });