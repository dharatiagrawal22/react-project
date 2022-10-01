const listReducer = (state = [], action) => {
  switch (action.type) {
    case "addList":
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};
export default listReducer;
