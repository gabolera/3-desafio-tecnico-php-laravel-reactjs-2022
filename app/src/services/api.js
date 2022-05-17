import axios from 'axios';

var headers = {};

if(localStorage.getItem('token')){
  let token = JSON.parse(localStorage.getItem('token'));
  headers.Authorization = `Bearer ${token}`;
}

export const api = axios.create({
  baseURL: 'http://api.challenge.local',
  headers
});