import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// api.get('/foo-bar')
// https://api.themoviedb.org/3/foo-bar

export default api