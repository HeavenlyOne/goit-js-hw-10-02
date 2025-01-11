const API_KEY = '48149972-37b948820d674e189867b2eae'
const BASE_URL = 'https://pixabay.com/api/'

export function getImages(input) {
    const API_KEY = '48149972-37b948820d674e189867b2eae'
    const BASE_URL = 'https://pixabay.com/api/'
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
    })
}