
import type { GIFResponse } from "../interfaces/gif.response";
const apiKey = 'Ney1BgBdg3mP32rER7CN9NP3seItm7CF'

fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
.then((resp) => resp.json())
.then((body: GIFResponse) => {
    console.log(body.data.images.downsized_medium.url)
})
.catch((err) => console.info(err));