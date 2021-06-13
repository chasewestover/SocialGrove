
function snacksReducer(state = [], action){
  switch(action.type){
    case "UPDATE_SNACKS":
      return action.payload;
    case "ADD":
      if(action.payload.type === "snack"){
        return [...state, action.payload];
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default snacksReducer;