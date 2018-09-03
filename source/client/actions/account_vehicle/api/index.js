import fetch from 'isomorphic-fetch';
import Config from '../../config/'

const API = {
  data: {
    async getAll(obj) {
        let response = await fetch(`${Config.api}/api/accountVehicle/${JSON.stringify(obj)}`);

        const status = response.status;
        let data = await response.json();
        return {
        	data:data.response,
        	status: status
        };
    },
    async getCount(obj) {
        let response = await fetch(`${Config.api}/api/accountVehicleCount/${JSON.stringify(obj)}`);

        const status = response.status;
        let data = await response.json();
        return {
          data:data.response,
          status: status
        };
    },
    async handleVehicle(item) {
      const response = await fetch(`${Config.api}/api/accountVehicle`,{
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