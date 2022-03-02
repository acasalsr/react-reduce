export function counter(state = 0, action) {
  switch (action.type) {
    case "counter/INCREMENT":
      return state + action.amount;
    case "counter/RESET":
      return 0;
    default:
      return state;
  }
}
const INCREMENT = "counter/INCREMENT";
export function increment(amount) {
  return { type: INCREMENT, amount };
}
const RESET = "counter/RESET";
export function reset() {
  return { type: RESET };
}

export function getCount(state) {
  return state.counter;
}
