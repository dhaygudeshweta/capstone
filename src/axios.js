const axios = require('axios')

const api = axios.create({
    baseURL: 'https://healthy-diet-backend.herokuapp.com/'
})

export default api