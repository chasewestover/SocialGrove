import API from "../Api";

async function snacksReducer(state = [], action){
  switch(action.type){
    case "FETCH":
      let snacks = await API.getSnacks();
      return snacks;
    case "ADD":
      return [...state, action.payload]
    default:
      break;
  }
}

export default snacksReducer;