import API from "../Api";

async function drinksReducer(state = [], action) {
  switch (action.type) {
    case "FETCH":
      let drinks = await API.getDrinks();
      return drinks;
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default drinksReducer;