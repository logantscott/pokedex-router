import Request from 'superagent';

export const getPokedex = async() => {
const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex'
const query = '';
let data = await Request.get(url);
return data;
}