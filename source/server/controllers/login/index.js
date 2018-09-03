import fetch from 'isomorphic-fetch';
import FormData from 'form-data';

async function get(req, res) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return res.status(200).send(data);
}

async function login(req, res) {
}

module.exports = {
  get,
  login
};
