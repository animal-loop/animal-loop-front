import fetch from 'isomorphic-fetch';
import Config from '../../config/'

const API = {
  data: {
    async getAll(obj) {
        let response = await fetch(`${Config.api}/api/assignment/${JSON.stringify(obj)}`);
        const status = response.status;
        let data = await response.json();
        
        return {
            data:data.response,
            status: status
        };
    },
    async getSetting(obj) {
        let response = await fetch(`${Config.api}/api/assignmentlist/${JSON.stringify(obj)}`);
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