import fetch from 'isomorphic-fetch';
import Config from '../../config/'

const API = {
  data: {
    async getSetting(obj) {
        let response = await fetch(`${Config.api}/api/dashboard/`);

        const status = response.status;
        let data = await response.json();

        return {
        	data: data.response,
        	status: status
        };
    },
    async getDate(obj) {
        let response = await fetch(`${Config.api}/api/datemax/`);

        const status = response.status;
        let data = await response.json();
        return {
            data:data,
            status: status
        };
    }
  },
};
export default API;
