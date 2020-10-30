import axios from 'axios'
const instance = axios.create({
    baseURL:'https://phoneecomerce.firebaseio.com/'
})
export default instance;