import axios from 'axios';
import { GIFResponse } from '../interfaces/gif.response';


const apiKey = 'Ney1BgBdg3mP32rER7CN9NP3seItm7CF'

export const giphyAPI = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
});

//export defaul giphyApi;

/*
giphyAPI.get<GIFResponse>('/random')
.then(resp => console.log(resp.data.data.images.downsized_large.url))
.catch(err => console.log(err));

*/