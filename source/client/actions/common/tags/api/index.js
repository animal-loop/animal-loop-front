import fetch from 'isomorphic-fetch';
import Config from '../../../config/'

const API = {
  dataMain: {
    async getMain(obj) {
        const response = await fetch(`${Config.api}/api/tagsmain/${JSON.stringify(obj)}`);
        const status = response.status;
        const data = await response.json();
        return {
        	data:data,
        	status: status
        };
    }
  },
};
export default API;
