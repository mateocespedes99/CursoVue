

import type { GIFResponse } from "../interfaces/gif.response";
import { giphyAPI } from "./10-axios";


export const getImage = async() => { //el async me lo transofrma para devolver una funcion tipo promesa

    try {
        const resp = await giphyAPI.get<GIFResponse>('/random');

        return resp.data.data.images.downsized_large.url;
    }catch (error){
        throw 'Url no encontrado'
    }

};

getImage().then((url) => console.log({url}));