import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const END_POINT = "/trending";
const API_KEY = "ff7af564ffcf2b7c2ca4fa26aeda6360";
const params = new URLSearchParams({
  api_key: API_KEY,
  page: 1,
});

export async function serviceMovie(page = 1) {
  params.page = page;
  try {
    const response = await axios.get(`${BASE_URL}${END_POINT}/all/day?${params}`);
    const data = await response.data;
    return data; 
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieById(id) {
  try {  
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.data;
    return data;   
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieByName (movie) {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?query=${movie}&${params}`);
    const data = response.data;
    return data;
  } catch (error){ 
    console.log(error.message);
  }
}

export async function fetchCastById(id) {
  try { 
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
    const data = await response.data;
    return data;   
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchReviewsById(id) {
  try {  
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
    const data = await response.data;
    return data;   
  } catch (error) {
    console.log(error.message);
  }
}