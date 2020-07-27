import axios from 'axios';

const UNSPLASH_KEY = 'Hp0ILTW3pWM1-EN2bEd2yBfyIdemONsyJet9gP6Iqm8';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_KEY}`
  }
});