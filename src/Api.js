import axios from "axios";

const BASE_API_URL = "https://my-json-server.typicode.com/chasewestover/SocialGrove-backend";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  //gets all snacks
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  //gets all drinks
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  //post request to add a resource, returns the newly added resource
  static async add(type, data) {
    const result = await axios.post(`${BASE_API_URL}/${type}s`, data);
    return result.data;
  }

}

export default SnackOrBoozeApi;
