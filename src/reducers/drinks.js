
function drinksReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE_DRINKS":
      return action.payload;
    case "ADD":
      if (action.payload.type === "drink") {
        return [...state, action.payload];
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default drinksReducer;