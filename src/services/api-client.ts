import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6023784c2d2d4a5f954b24337449a59d'
    }
})