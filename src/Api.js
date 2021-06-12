const BASE_API_URL = process.env.REACT_APP_DB ;

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  //gets all snacks
  static async getSnacks() {
    const result = await fetch(`${BASE_API_URL}/snacks`)
    if (!result.ok) {
      throw new Error(`An error has occured: ${result.status}`);
    }
    const json = await result.json();
    return json;
  }

  //gets all drinks
  static async getDrinks() {
    const result = await fetch(`${BASE_API_URL}/drinks`);
    if (!result.ok) {
      throw new Error(`An error has occured: ${result.status}`);
    }
    const json = await result.json();
    return json;
  }

  //post request to add a resource, returns the newly added resource
  static async add(type, data) {

    const result = await fetch(`${BASE_API_URL}/${type}s`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!result.ok) {
      throw new Error(`An error has occured: ${result.status}`);
    }
    const json = await result.json();
    console.log(result, json)
    return json;
  }

}

export default SnackOrBoozeApi;
