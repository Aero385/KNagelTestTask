import axios from 'axios';

const base_url = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0';

export const fetchShipment = () => {
 
    const fetching = async (api) => {
      const response = await axios.get(api);
      return response;
    };
  
    return fetching(base_url);
  };