import fetch from 'isomorphic-fetch';
import Config from '../../config/'

const API = {
  data: {
    async getAll(obj) {
        let response = await fetch(`${Config.api}/api/summarybehaviour/${JSON.stringify(obj)}`);

        const status = response.status;
        let data = await response.json();

        return {
        	data:data.response,
        	status: status
        };
    }
  },
};
export default API;