import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/'
const KEY = '30141749-fb2f341407d461fabdd51ea4f'

export const fetchImages = async (query, page) => {
    const { data } = await axios.get(`?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return data
}
