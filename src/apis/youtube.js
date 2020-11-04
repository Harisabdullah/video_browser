import axios from 'axios';

const KEY = 'AIzaSyBNgh6n8XQn5C9LG2CWaH91H3In3F_OXiI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
