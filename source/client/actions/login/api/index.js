import fetch from 'isomorphic-fetch';
import Config from '../../config/'

const API = {
  data: {
    async getAll(idParam, obj) {
        let response = await fetch(`${Config.api}/api/login`);
        let data = await response.json();
        return data;
    },
    async save(item) {
      const response = await fetch(`${Config.api}/api/login`,{
        method: 'POST',
        headers: new Headers({
        	'Content-Type': 'application/json',
        	Accept: 'application/json',
        }),
        body: JSON.stringify(item),
      });
      const status = response.status;
      const data = await response.json();
      return {data: data, status: status};
    }
  },
};
export default API;
