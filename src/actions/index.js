export function updateDrinks(payload){
  return {
    type: "UPDATE_DRINKS",
    payload
  }
}

export function updateSnacks(payload){
  return {
    type: "UPDATE_SNACKS",
    payload
  }
}

export function add(payload) {
  return {
    type: "ADD",
    payload
  }
}