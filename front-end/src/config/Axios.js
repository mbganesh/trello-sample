import axios from "axios";

const Axios = axios.create({
    baseURL:'http://localhost:5555/'
})

export default Axios