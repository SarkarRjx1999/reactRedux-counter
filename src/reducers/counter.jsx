let initialState = 0;
const chngNum = (state = initialState, action) => {
  if (action.type === "INC") {
    return state + 1;
  } else if (action.type === "DEC") {
    if (state <= 0) {
      return state;
    } else {
      return state - 1;
    }
  } else {
    return state;
  }
};
export default chngNum;
